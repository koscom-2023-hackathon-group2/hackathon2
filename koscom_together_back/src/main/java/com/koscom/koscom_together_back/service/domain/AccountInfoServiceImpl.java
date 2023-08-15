package com.koscom.koscom_together_back.service.domain;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.domain.account.AccountInfoStatus;
import com.koscom.koscom_together_back.domain.accountInfo.AccountInfo;
import com.koscom.koscom_together_back.domain.member.Member;
import com.koscom.koscom_together_back.domain.stock.StockAsset;
import com.koscom.koscom_together_back.infrastructure.repository.AccountInfoRepository;
import com.koscom.koscom_together_back.infrastructure.repository.AccountRepository;
import com.koscom.koscom_together_back.protocol.response.AccountResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED)
public class AccountInfoServiceImpl implements AccountInfoService {

    private final AccountInfoRepository accountInfoRepository;

    @Override
    public AccountInfo createAccountInfo(Member member, Account account, AccountInfoStatus accountInfoStatus) {
        if (accountInfoStatus.equals(AccountInfoStatus.HOST)) {
            return accountInfoRepository.save(AccountInfo.createHost(member, account));
        } else {
            return accountInfoRepository.save(AccountInfo.of(member, account));
        }
    }

    @Override
    public List<AccountInfo> getAccountInfos(Member member) {
        return accountInfoRepository.findByMemberSeq(member.getSeq());
    }
}
