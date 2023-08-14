package com.koscom.koscom_together_back.service;

import com.koscom.koscom_together_back.dto.AccountDto;
import com.koscom.koscom_together_back.protocol.response.AccountResponse;

import java.util.List;

public interface GroupAccountService {

    void createGroupAccount(String memberId, AccountDto request);
    List<AccountResponse> getGroupAccounts(String memberId);
}
