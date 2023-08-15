package com.koscom.koscom_together_back.infrastructure.repository;

import com.koscom.koscom_together_back.domain.invite.Invite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InviteRepository extends JpaRepository<Invite, Long> {

    List<Invite> findByInviteeId(String inviteeId);
    Invite findByInviteeIdAndAccount(String inviteeId, String account);
}
