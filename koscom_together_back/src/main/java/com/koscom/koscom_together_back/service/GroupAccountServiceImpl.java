package com.koscom.koscom_together_back.service;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.domain.member.Member;
import com.koscom.koscom_together_back.domain.accountInfo.AccountInfo;
import com.koscom.koscom_together_back.dto.AccountDto;
import com.koscom.koscom_together_back.infrastructure.repository.AccountInfoRepository;
import com.koscom.koscom_together_back.service.domain.AccountInfoService;
import com.koscom.koscom_together_back.service.domain.AccountService;
import com.koscom.koscom_together_back.service.domain.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED)
public class GroupAccountServiceImpl implements GroupAccountService {

    private final AccountService accountService;
    private final MemberService memberService;
    private final AccountInfoService accountInfoService;

    @Override
    public void createGroupAccount(final String memberId, final AccountDto request) {
        final Account account = accountService.createAccount(request);
        final Member member = memberService.findMember(memberId);
        accountInfoService.createAccountInfo(member, account);
    }
}
