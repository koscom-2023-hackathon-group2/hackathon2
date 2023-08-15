package com.koscom.koscom_together_back.service;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.domain.order.Order;
import com.koscom.koscom_together_back.domain.order.OrderType;
import com.koscom.koscom_together_back.domain.stock.StockAsset;
import com.koscom.koscom_together_back.dto.OrderDto;
import com.koscom.koscom_together_back.infrastructure.repository.AccountRepository;
import com.koscom.koscom_together_back.infrastructure.repository.OrderRepository;
import com.koscom.koscom_together_back.infrastructure.repository.StockAssetRepository;
import com.koscom.koscom_together_back.service.domain.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED)
public class OrderServiceImpl implements OrderService {

    private final AccountService accountService;
    private final OrderRepository orderRepository;
    private final AccountRepository accountRepository;
    private final StockAssetRepository stockAssetRepository;

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
}
