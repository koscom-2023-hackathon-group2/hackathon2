package com.koscom.koscom_together_back.domain.accountInfo;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.domain.account.AccountInfoStatus;
import com.koscom.koscom_together_back.domain.base.BaseTimeEntity;
import com.koscom.koscom_together_back.domain.member.Member;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "MEMBER_ACCOUNT")
@EqualsAndHashCode
public class AccountInfo extends BaseTimeEntity {

    private static final AccountInfoStatus HOST = AccountInfoStatus.HOST;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SEQ")
    private Long seq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_seq")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_seq")
    private Account account;

    @Column(name = "ACCOUNT_INFO_STATUS")
    @Enumerated(EnumType.STRING)
    private AccountInfoStatus accountInfoStatus;

    @Builder
    public AccountInfo(Long seq, Member member, Account account, AccountInfoStatus accountInfoStatus ) {
        this.seq = seq;
        this.member = member;
        this.account = account;
        this.accountInfoStatus = accountInfoStatus;
    }

    public static AccountInfo of(Member member, Account account) {
        return AccountInfo.builder()
                .member(member)
                .account(account)
                .build();
    }

    public static AccountInfo createHost(Member member, Account account) {
        return AccountInfo.builder()
                .member(member)
                .account(account)
                .accountInfoStatus(HOST)
                .build();
    }
}
