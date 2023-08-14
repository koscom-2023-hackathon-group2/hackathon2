package com.koscom.koscom_together_back.infrastructure.repository;

import com.koscom.koscom_together_back.domain.accountInfo.AccountInfo;
import com.koscom.koscom_together_back.domain.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountInfoRepository extends JpaRepository<AccountInfo, Long> {
    @Query(value = "SELECT ai " +
            "FROM AccountInfo ai " +
            "JOIN FETCH ai.member " +
            "JOIN FETCH ai.account " +
            "WHERE ai.member.seq = :memberSeq ")
    List<AccountInfo> findByMemberSeq(Long memberSeq);
}
