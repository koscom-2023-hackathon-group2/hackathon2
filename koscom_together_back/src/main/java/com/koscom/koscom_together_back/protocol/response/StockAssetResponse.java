package com.koscom.koscom_together_back.protocol.response;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.domain.stock.StockAsset;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.time.LocalDateTime;


@Data
@ToString
public class StockAssetResponse {
    private Long seq;
    private Account account;
    private String stockNumber;
    private String itemName;
    private String stockMarket;
    private Integer count;
    private Long totalPrice;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @Builder
    public StockAssetResponse(Long seq, Account account, String stockNumber, String itemName, String stockMarket, Integer count, Long totalPrice, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.seq = seq;
        this.account = account;
        this.stockNumber = stockNumber;
        this.itemName = itemName;
        this.stockMarket = stockMarket;
        this.count = count;
        this.totalPrice = totalPrice;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    public static StockAssetResponse entityToResponse(StockAsset stockAsset) {
        return StockAssetResponse.builder()
                .seq(stockAsset.getSeq())
                .stockNumber(stockAsset.getStockNumber())
                .itemName(stockAsset.getItemName())
                .stockMarket(stockAsset.getStockMarket())
                .count(stockAsset.getCount())
                .totalPrice(stockAsset.getTotalPrice())
                .createdAt(stockAsset.getCreatedAt())
                .updatedAt(stockAsset.getUpdatedAt())
                .build();
    }
}
