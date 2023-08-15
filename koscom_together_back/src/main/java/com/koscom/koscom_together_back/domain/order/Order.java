package com.koscom.koscom_together_back.domain.order;

import com.koscom.koscom_together_back.domain.base.BaseTimeEntity;
import com.koscom.koscom_together_back.dto.OrderDto;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "ORDER_HISTORY")
@EqualsAndHashCode
public class Order extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SEQ")
    private Long seq;

    @Column(name = "MEMBER_ID")
    private String memberId;

    @Column(name = "ACCOUNT_ID")
    private String accountId;

    // 종목번호
    @Column(name = "STOCK_NUMBER")
    private String stockNumber;

    @Enumerated(EnumType.STRING)
    @Column(name = "ORDER_TYPE")
    private OrderType orderType;

    @Column(name = "STOCK_TYPE")
    private StockType stockType;

    @Column(name = "STOCK_COUNT")
    private Integer stockCount;

    @Column(name = "PRICE")
    private Long price;

    @Builder
    public Order(Long seq, String memberId, String accountId, String stockNumber, OrderType orderType, StockType stockType, Integer stockCount, Long price) {
        this.seq = seq;
        this.memberId = memberId;
        this.accountId = accountId;
        this.stockNumber = stockNumber;
        this.orderType = orderType;
        this.stockType = stockType;
        this.stockCount = stockCount;
        this.price = price;
    }

    public static Order of(OrderDto request) {
        return Order.builder()
                .memberId(request.getMemberId())
                .accountId(request.getAccountId())
                .stockNumber(request.getStockNumber())
                .orderType(request.getOrderType())
                .stockType(request.getStockType())
                .stockCount(request.getCount())
                .price(request.getPrice())
                .build();
    }
}
