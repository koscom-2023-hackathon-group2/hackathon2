package com.koscom.koscom_together_back.service;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.domain.order.Order;
import com.koscom.koscom_together_back.domain.order.OrderType;
import com.koscom.koscom_together_back.domain.stock.EtfInfo;
import com.koscom.koscom_together_back.domain.stock.StockAsset;
import com.koscom.koscom_together_back.domain.stock.StockInfo;
import com.koscom.koscom_together_back.dto.OrderDto;
import com.koscom.koscom_together_back.infrastructure.repository.AccountRepository;
import com.koscom.koscom_together_back.infrastructure.repository.EtfInfoRepository;
import com.koscom.koscom_together_back.infrastructure.repository.OrderRepository;
import com.koscom.koscom_together_back.infrastructure.repository.StockAssetRepository;
import com.koscom.koscom_together_back.infrastructure.repository.StockInfoRepository;
import com.koscom.koscom_together_back.protocol.response.OrderHistoryResponse;
import com.koscom.koscom_together_back.service.domain.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED)
public class OrderServiceImpl implements OrderService {

    private final AccountService accountService;
    private final OrderRepository orderRepository;
    private final AccountRepository accountRepository;
    private final StockAssetRepository stockAssetRepository;
    private final EtfInfoRepository etfInfoRepository;
    private final StockInfoRepository stockInfoRepository;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void order(OrderDto request) throws Exception {
        final Order order = Order.of(request);
        final String accountId = order.getAccountId();
        final Account account = accountService.findAccountAndStockAssets(accountId);

        final StockAsset stockAsset = account.getStockAssets().stream()
                .filter(x -> x.getStockNumber().equals(order.getStockNumber()))
                .findFirst().orElseGet(() -> StockAsset.create(request));
        if (order.getOrderType() == OrderType.BUY) {
            stockAsset.buy(order.getStockCount(), order.getPrice());
            account.decreaseCash(order.getStockCount(), order.getPrice());
        } else {
            if (stockAsset.isLack(order.getStockCount())) throw new Exception();
            stockAsset.sell(order.getStockCount(), order.getPrice());
            account.increaseCash(order.getStockCount(), order.getPrice());
        }

        account.getStockAssets().add(stockAsset);
        stockAsset.link(account);

        accountRepository.save(account);
        stockAssetRepository.save(stockAsset);
        orderRepository.save(order);
    }

    @Override
    public List<OrderHistoryResponse> getOrderHistory(final String accountId) {
        return orderRepository.findByAccountId(accountId).stream()
                .map(x -> OrderHistoryResponse.EntityToProtocol(x))
                .collect(Collectors.toList());
    }
}
