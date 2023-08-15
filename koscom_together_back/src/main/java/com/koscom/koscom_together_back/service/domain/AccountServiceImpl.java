package com.koscom.koscom_together_back.service.domain;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.domain.stock.StockAsset;
import com.koscom.koscom_together_back.dto.AccountDto;
import com.koscom.koscom_together_back.infrastructure.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED)
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;

    @Override
    public Account createAccount(AccountDto request) {
        return accountRepository.save(Account.of(request));
    }

    @Override
    public Account findAccount(String accountId){
        return accountRepository.findByFakeAccountId(accountId).orElseThrow();
    }

    @Override
    public Account findAccountAndStockAssets(String accountId) {
        return accountRepository.findByRealAccountId(accountId);
    }

}
