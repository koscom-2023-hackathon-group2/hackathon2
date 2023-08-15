package com.koscom.koscom_together_back.service.domain;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.domain.stock.StockAsset;
import com.koscom.koscom_together_back.dto.AccountDto;

import java.util.List;

public interface AccountService {
    Account createAccount(AccountDto request);
    Account findAccount(String accountId);

    Account findAccountAndStockAssets(String accountId);
}
