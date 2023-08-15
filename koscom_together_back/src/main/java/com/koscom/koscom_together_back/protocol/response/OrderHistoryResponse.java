package com.koscom.koscom_together_back.protocol.response;

import com.koscom.koscom_together_back.domain.order.Order;
import com.koscom.koscom_together_back.domain.order.OrderType;
import com.koscom.koscom_together_back.domain.order.StockType;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class OrderHistoryResponse {
    private Long seq;
    private String memberId;
    private String accountId;
    private String stockNumber;
    private String itemName;
    private String stockMarket;
    private OrderType orderType;
    private StockType stockType;
    private Integer stockCount;
    private Long price;

    @Builder
    public OrderHistoryResponse(Long seq, String memberId, String accountId, String stockNumber, String itemName, String stockMarket, OrderType orderType, StockType stockType, Integer stockCount, Long price) {
        this.seq = seq;
        this.memberId = memberId;
        this.accountId = accountId;
        this.stockNumber = stockNumber;
        this.itemName = itemName;
        this.stockMarket = stockMarket;
        this.orderType = orderType;
        this.stockType = stockType;
        this.stockCount = stockCount;
        this.price = price;
    }

    public static OrderHistoryResponse EntityToProtocol(Order order) {
        return OrderHistoryResponse.builder()
                .seq(order.getSeq())
                .memberId(order.getMemberId())
                .accountId(order.getAccountId())
                .stockNumber(order.getStockNumber())
                .orderType(order.getOrderType())
                .stockType(order.getStockType())
                .stockCount(order.getStockCount())
                .price(order.getPrice())
                .itemName(order.getItemName())
                .stockMarket(order.getStockMarket())
                .build();
    }
}
