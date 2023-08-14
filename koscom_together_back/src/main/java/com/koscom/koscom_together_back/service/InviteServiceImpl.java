package com.koscom.koscom_together_back.service;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.domain.account.AccountInfoStatus;
import com.koscom.koscom_together_back.domain.member.Member;
import com.koscom.koscom_together_back.dto.AccountDto;
import com.koscom.koscom_together_back.service.domain.AccountInfoService;
import com.koscom.koscom_together_back.service.domain.AccountService;
import com.koscom.koscom_together_back.service.domain.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED)
public class InviteServiceImpl implements InviteService {

    private final AccountService accountService;
    private final MemberService memberService;
    private final AccountInfoService accountInfoService;

    @Override
    public void addInvitee(final String accountId, final String inviteeId) {
        // 모임 계좌 가져오기
        final Account account = accountService.findAccount(accountId);
        // invitee 가져오기
        final Member member = memberService.findMember(inviteeId);
        // 모임 계좌와 invitee 정보를 추가.
        accountInfoService.createAccountInfo(member, account, AccountInfoStatus.NORMAL);
    }
}
