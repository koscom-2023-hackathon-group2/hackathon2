package com.koscom.koscom_together_back.domain.account;

import com.koscom.koscom_together_back.domain.member.Member;
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
import javax.persistence.Table;

/**
 * @author          : jcw
 * @date            : 2023/08/13
 * @description     : 출납계좌 entity
 */
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "DEPOSIT_ACCOUNT")
@EqualsAndHashCode
public class DepositAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SEQ")
    private Long seq;

    @Column(name = "BANK_TYPE")
    private BankType bankType;

    @Column(name = "ACCOUNT_ID")
    private String accountId;

    @Column(name = "MEMBER_ID")
    private String memberId;

    @Builder
    public DepositAccount(Long seq, BankType bankType, String accountId, String memberId) {
        this.seq = seq;
        this.bankType = bankType;
        this.accountId = accountId;
        this.memberId = memberId;
    }

    public static DepositAccount of(Member member, AccountDto request) {
        return DepositAccount.builder()
                .accountId(request.getDepositAccountId())
                .bankType(BankType.valueOf(request.getDepositAccountCode()))
                .memberId(member.getId())
                .build();

    }
}
