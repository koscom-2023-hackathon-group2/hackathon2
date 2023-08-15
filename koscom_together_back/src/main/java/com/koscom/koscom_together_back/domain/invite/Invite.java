package com.koscom.koscom_together_back.domain.invite;

import com.koscom.koscom_together_back.domain.accountInfo.AccountInfo;
import com.koscom.koscom_together_back.domain.base.BaseTimeEntity;
import com.koscom.koscom_together_back.dto.AccountDto;
import com.koscom.koscom_together_back.dto.HostDto;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * @author          : yjy
 * @date            : 2023/08/15
 * @description     : 초대 목록 entity
 */
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "Invite")
@EqualsAndHashCode
public class Invite extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SEQ")
    private Long seq;

    @Column(name = "HOST_ID")
    private String hostId;

    @Column(name = "INVITEE_ID")
    private String inviteeId;

    @Column(name = "ACCOUNT")
    private String account;

    @Builder
    public Invite(String hostId, String inviteeId, String account) {
        this.hostId = hostId;
        this.inviteeId = inviteeId;
        this.account = account;
    }

    public static Invite of(HostDto request) {
        return Invite.builder()
                .hostId(request.getHostId())
                .inviteeId(request.getInviteeId())
                .account(request.getAccount())
                .build();
    }
}
