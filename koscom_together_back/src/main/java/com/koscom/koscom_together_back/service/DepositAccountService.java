package com.koscom.koscom_together_back.service;

import com.koscom.koscom_together_back.dto.AccountDto;

public interface DepositAccountService {

    void addDepositAccount(String hostId, AccountDto DepositAccount);
}
