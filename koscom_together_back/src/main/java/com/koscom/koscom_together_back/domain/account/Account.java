package com.koscom.koscom_together_back.domain.account;

import com.koscom.koscom_together_back.domain.base.BaseTimeEntity;
import com.koscom.koscom_together_back.domain.accountInfo.AccountInfo;
import com.koscom.koscom_together_back.dto.AccountDto;
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
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * @author          : jcw
 * @date            : 2023/08/13
 * @description     : 계좌 entity
 */
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "Account")
@EqualsAndHashCode
public class Account extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SEQ")
    private Long seq;

    @Column(name = "REAL_ACCOUNT_ID")
    private String realAccountId;

    @Column(name = "FAKE_ACCOUNT_ID")
    private String fakeAccountId;

    @Column(name = "NICKNAME")
    private String nickname;

    @Column(name = "CASH_ASSET")
    private Long cashAsset;

    @Column(name = "STOCK_ASSET")
    private Long stockAsset;

    @OneToMany(mappedBy = "account")
    private List<AccountInfo> accountInfos = new ArrayList<>();

    @Builder
    public Account(String realAccountId, String fakeAccountId, String nickname, List<AccountInfo> accountInfos, Long cashAsset, Long stockAsset) {
        this.realAccountId = realAccountId;
        this.fakeAccountId = fakeAccountId;
        this.nickname = nickname;
        this.accountInfos = accountInfos;
        this.cashAsset = cashAsset;
        this.stockAsset = stockAsset;
    }

    public static Account of(AccountDto request) {
        return Account.builder()
                .realAccountId(UUID.randomUUID().toString())
                .fakeAccountId(UUID.randomUUID().toString())
                .nickname(request.getNickName())
                .cashAsset(185000000L)
                .stockAsset(0L)
                .build();
    }
}
