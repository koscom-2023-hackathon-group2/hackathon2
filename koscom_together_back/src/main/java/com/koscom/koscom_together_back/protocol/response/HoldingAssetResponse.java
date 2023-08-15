package com.koscom.koscom_together_back.protocol.response;

import com.koscom.koscom_together_back.domain.account.Account;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;
import java.util.ArrayList;
import java.util.List;

@Data
@ToString
public class HoldingAssetResponse {
    private Long seq;
    private String realAccountId;
    private String fakeAccountId;
    private String nickname;
    private Long cashAsset;
    private List<StockAssetResponse> stockAssets = new ArrayList<>();

    @Builder
    public HoldingAssetResponse(Long seq, String realAccountId, String fakeAccountId, String nickname, Long cashAsset, List<StockAssetResponse> stockAssets) {
        this.seq = seq;
        this.realAccountId = realAccountId;
        this.fakeAccountId = fakeAccountId;
        this.nickname = nickname;
        this.cashAsset = cashAsset;
        this.stockAssets = stockAssets;
    }

    public static HoldingAssetResponse of(Account account, List<StockAssetResponse> stockAssets) {
        return HoldingAssetResponse.builder()
                .seq(account.getSeq())
                .realAccountId(account.getRealAccountId())
                .fakeAccountId(account.getFakeAccountId())
                .nickname(account.getNickname())
                .cashAsset(account.getCashAsset())
                .stockAssets(stockAssets)
                .build();
    }
}
