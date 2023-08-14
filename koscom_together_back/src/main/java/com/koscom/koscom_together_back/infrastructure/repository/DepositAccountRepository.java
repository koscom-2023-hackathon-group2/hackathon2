package com.koscom.koscom_together_back.infrastructure.repository;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.domain.account.DepositAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DepositAccountRepository extends JpaRepository<DepositAccount, Long> {
}
