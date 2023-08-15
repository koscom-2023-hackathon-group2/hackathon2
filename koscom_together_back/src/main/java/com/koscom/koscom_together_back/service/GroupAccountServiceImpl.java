package com.koscom.koscom_together_back.service;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.domain.account.AccountInfoStatus;
import com.koscom.koscom_together_back.domain.accountInfo.AccountInfo;
import com.koscom.koscom_together_back.domain.member.Member;
import com.koscom.koscom_together_back.dto.AccountDto;
import com.koscom.koscom_together_back.protocol.response.AccountResponse;
import com.koscom.koscom_together_back.protocol.response.HoldingAssetResponse;
import com.koscom.koscom_together_back.protocol.response.StockAssetResponse;
import com.koscom.koscom_together_back.service.domain.AccountInfoService;
import com.koscom.koscom_together_back.service.domain.AccountService;
import com.koscom.koscom_together_back.service.domain.DepositAccountService;
import com.koscom.koscom_together_back.service.domain.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED)
public class GroupAccountServiceImpl implements GroupAccountService {

    private final AccountService accountService;
    private final MemberService memberService;
    private final AccountInfoService accountInfoService;
    private final DepositAccountService depositAccountService;


    @Override
    public void createGroupAccount(final String memberId, final AccountDto request) {
        final Account account = accountService.createAccount(request);
        final Member member = memberService.findMember(memberId);
        accountInfoService.createAccountInfo(member, account, AccountInfoStatus.HOST);
        depositAccountService.addDepositAccount(memberId, request);
    }

    @Override
    public List<AccountResponse> getGroupAccounts(final String memberId) {
        //멤버 엔티티 조회
        final Member member = memberService.findMember(memberId);
        // accountInfo 엔티티 조회
        return accountInfoService.getAccountInfos(member).stream()
                .map(x -> AccountResponse.of(x.getAccount()))
                .collect(Collectors.toList());
    }

    @Override
    public HoldingAssetResponse getHoldingAsset(String accountId) {
        final Account account = accountService.findAccountAndStockAssets(accountId);
        final List<StockAssetResponse> stockAssetResponses = account.getStockAssets().stream()
                .map(x -> StockAssetResponse.entityToResponse(x))
                .collect(Collectors.toList());

        return HoldingAssetResponse.of(account, stockAssetResponses);
    }
}
