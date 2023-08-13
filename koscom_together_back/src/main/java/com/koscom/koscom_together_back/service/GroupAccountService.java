package com.koscom.koscom_together_back.service;

import com.koscom.koscom_together_back.dto.AccountDto;

public interface GroupAccountService {

    void createGroupAccount(String memberId, AccountDto request);
}
