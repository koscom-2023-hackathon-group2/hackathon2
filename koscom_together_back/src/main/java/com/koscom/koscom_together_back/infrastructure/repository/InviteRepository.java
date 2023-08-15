package com.koscom.koscom_together_back.infrastructure.repository;

import com.koscom.koscom_together_back.domain.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findById(String memberId);
}
