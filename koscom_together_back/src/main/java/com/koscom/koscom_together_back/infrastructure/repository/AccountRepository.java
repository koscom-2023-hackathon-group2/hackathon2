package com.koscom.koscom_together_back.infrastructure.repository;

import com.koscom.koscom_together_back.domain.account.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    Optional<Account> findByFakeAccountId(String accountId);

    @Query(value = "SELECT ac " +
            "FROM Account ac " +
            "LEFT JOIN FETCH ac.stockAssets " +
            "WHERE ac.realAccountId = :accountId ")
    Account findByRealAccountId(String accountId);
}
