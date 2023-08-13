package com.koscom.koscom_together_back.infrastructure.repository;

import com.koscom.koscom_together_back.domain.accountInfo.AccountInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountInfoRepository extends JpaRepository<AccountInfo, Long> {

}
