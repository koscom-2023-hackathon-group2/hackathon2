package com.koscom.koscom_together_back.domain.stock;

import com.koscom.koscom_together_back.domain.base.BaseTimeEntity;
import com.koscom.koscom_together_back.dto.AccountDto;
import lombok.*;

import javax.persistence.*;

/**
 * @author          : yjy
 * @date            : 2023/08/14
 * @description     : ETF entity
 */
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "ETF_INFO")
@EqualsAndHashCode
public class EtfInfo extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SEQ")
    private Long seq;

    // 주식 종목 명
    @Column(name = "ITEM_NAME")
    private String itemName;

    // 주식 종목 번호
    @Column(name = "STOCK_NUMBER")
    private String stockNumber;

    // 주식 소속
    @Column(name = "STOCK_MARKET")
    private String stockMarket;

    // 주식 현재가
    @Column(name = "STOCK_PRICE")
    private int stockPrice;

    // 주식 수익률
    @Column(name = "RATE_OF_RETURN")
    private double rateOfReturn;

    @Builder
    public EtfInfo(String itemName, String stockNumber, String stockMarket, int stockPrice, double rateOfReturn) {
        this.itemName = itemName;
        this.stockNumber = stockNumber;
        this.stockMarket = stockMarket;
        this.stockPrice = stockPrice;
        this.rateOfReturn = rateOfReturn;
    }

    public static EtfInfo of(AccountDto request) {
        return EtfInfo.builder()
                .build();
    }
}
