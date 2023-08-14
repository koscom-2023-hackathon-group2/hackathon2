package com.koscom.koscom_together_back.service;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.domain.account.DepositAccount;
import com.koscom.koscom_together_back.domain.member.Member;
import com.koscom.koscom_together_back.dto.AccountDto;
import com.koscom.koscom_together_back.service.domain.AccountInfoService;
import com.koscom.koscom_together_back.service.domain.AccountService;
import com.koscom.koscom_together_back.service.domain.DepositAccountInfoService;
import com.koscom.koscom_together_back.service.domain.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED)
public class DepositAccountServiceImpl implements DepositAccountService {

    private final DepositAccountInfoService depositAccountInfoService;
    private final MemberService memberService;

    @Override
    public void addDepositAccount(final String hostId, final AccountDto DepositAccount){
        // host 가져오기
        final Member member = memberService.findMember(hostId);
        // 출납 계좌 추가
        depositAccountInfoService.createDepositAccount(member, DepositAccount);
    }
}
