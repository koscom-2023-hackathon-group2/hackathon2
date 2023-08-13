package com.koscom.koscom_together_back.service.domain;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.dto.AccountDto;

public interface AccountService {
    Account createAccount(AccountDto request);
}
