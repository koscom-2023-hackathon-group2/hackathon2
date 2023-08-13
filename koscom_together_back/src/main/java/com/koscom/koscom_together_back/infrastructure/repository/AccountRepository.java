package com.koscom.koscom_together_back.infrastructure.repository;

import com.koscom.koscom_together_back.domain.account.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
}
