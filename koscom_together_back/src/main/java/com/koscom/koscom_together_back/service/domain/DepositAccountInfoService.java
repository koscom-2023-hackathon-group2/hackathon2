package com.koscom.koscom_together_back.service.domain;

import com.koscom.koscom_together_back.domain.account.DepositAccount;
import com.koscom.koscom_together_back.domain.member.Member;
import com.koscom.koscom_together_back.dto.AccountDto;

public interface DepositAccountInfoService {
    DepositAccount createDepositAccount(Member member, AccountDto request);
}
