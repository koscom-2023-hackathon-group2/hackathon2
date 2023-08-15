package com.koscom.koscom_together_back.protocol.response;

import com.koscom.koscom_together_back.domain.account.Account;
import lombok.Builder;
import lombok.Data;

@Data
public class AccountResponse {
    private Long seq;
    private String realAccountId;
    private String fakeAccountId;
    private String nickname;
    private Long cashAsset;
    private Long stockAsset;

    @Builder
    public AccountResponse(Long seq, String realAccountId, String fakeAccountId, String nickname, Long cashAsset, Long stockAsset) {
        this.seq = seq;
        this.realAccountId = realAccountId;
        this.fakeAccountId = fakeAccountId;
        this.nickname = nickname;
        this.cashAsset = cashAsset;
        this.stockAsset = stockAsset;
    }

    public static AccountResponse of (Account account) {
        return AccountResponse.builder()
                .seq(account.getSeq())
                .realAccountId(account.getRealAccountId())
                .fakeAccountId(account.getFakeAccountId())
                .nickname(account.getNickname())
                .cashAsset(account.getCashAsset())
                .build();
    }
}
