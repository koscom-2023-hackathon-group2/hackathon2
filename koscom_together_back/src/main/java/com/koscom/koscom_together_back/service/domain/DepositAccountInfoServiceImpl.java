package com.koscom.koscom_together_back.service.domain;

import com.koscom.koscom_together_back.domain.account.DepositAccount;
import com.koscom.koscom_together_back.domain.member.Member;
import com.koscom.koscom_together_back.dto.AccountDto;
import com.koscom.koscom_together_back.infrastructure.repository.DepositAccountRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED)
public class DepositAccountInfoServiceImpl implements DepositAccountInfoService {

    private final DepositAccountRepository depositAccountRepository;

    @Override
    public DepositAccount createDepositAccount(Member member, AccountDto request) {
        return depositAccountRepository.save(DepositAccount.of(member, request));
    }
}
