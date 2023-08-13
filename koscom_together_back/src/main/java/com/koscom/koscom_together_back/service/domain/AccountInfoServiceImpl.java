package com.koscom.koscom_together_back.service.domain;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.domain.accountInfo.AccountInfo;
import com.koscom.koscom_together_back.domain.member.Member;
import com.koscom.koscom_together_back.infrastructure.repository.AccountInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED)
public class AccountInfoServiceImpl implements AccountInfoService {

    private final AccountInfoRepository accountInfoRepository;

    @Override
    public AccountInfo createAccountInfo(Member member, Account account) {
        return accountInfoRepository.save(AccountInfo.of(member, account));
    }
}
