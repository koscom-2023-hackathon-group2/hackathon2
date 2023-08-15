package com.koscom.koscom_together_back.domain.stock;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.domain.base.BaseTimeEntity;
import com.koscom.koscom_together_back.dto.OrderDto;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "STOCK_ASSET")
@EqualsAndHashCode
public class StockAsset extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SEQ")
    private Long seq;

    @ManyToOne
    @JoinColumn(name = "accountSeq")
    private Account account;

    // 종목번호
    @Column(name = "STOCK_NUMBER")
    private String stockNumber;

    @Column(name = "COUNT")
    private Integer count;

    @Column(name = "TOTAL_PRICE")
    private Long totalPrice;

    @Builder
    public StockAsset(Long seq, String stockNumber, Integer count, Long totalPrice) {
        this.seq = seq;
        this.stockNumber = stockNumber;
        this.count = count;
        this.totalPrice = totalPrice;
    }

    public static StockAsset create (OrderDto request) {
        return StockAsset.builder()
                .stockNumber(request.getStockNumber())
                .count(0)
                .totalPrice(0L)
                .build();
    }

    public void buy(int count, long price) {
        this.count += count;
        this.totalPrice += count * price;
    }

    public void sell(int count, long price) {
        this.count -= count;
        this.totalPrice -= count * price;
    }

    public boolean isLack(int count) {
        return this.count < count;
    }

    public void link(Account account) {
        this.account = account;
    }
}
