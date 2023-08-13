package com.koscom.koscom_together_back.service.domain;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.domain.member.Member;
import com.koscom.koscom_together_back.domain.accountInfo.AccountInfo;

public interface AccountInfoService {
    AccountInfo createAccountInfo(Member member, Account account);
}
