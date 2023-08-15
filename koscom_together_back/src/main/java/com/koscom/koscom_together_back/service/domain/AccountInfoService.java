package com.koscom.koscom_together_back.service.domain;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.domain.account.AccountInfoStatus;
import com.koscom.koscom_together_back.domain.member.Member;
import com.koscom.koscom_together_back.domain.accountInfo.AccountInfo;
import com.koscom.koscom_together_back.domain.stock.StockAsset;
import com.koscom.koscom_together_back.protocol.response.AccountResponse;

import java.util.List;

public interface AccountInfoService {
    AccountInfo createAccountInfo(Member member, Account account, AccountInfoStatus accountInfoStatus);
    List<AccountInfo> getAccountInfos(Member member);
}
