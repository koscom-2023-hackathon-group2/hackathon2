package com.koscom.koscom_together_back.infrastructure.repository;

import com.koscom.koscom_together_back.domain.invite.Invite;
import com.koscom.koscom_together_back.domain.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface InviteRepository extends JpaRepository<Invite, Long> {

    List<Invite> findByInviteeId(String inviteeId);
}
