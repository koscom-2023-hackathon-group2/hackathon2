package com.koscom.koscom_together_back.infrastructure.repository;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.domain.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    Optional<Account> findByFakeAccountId(String accountId);
}
