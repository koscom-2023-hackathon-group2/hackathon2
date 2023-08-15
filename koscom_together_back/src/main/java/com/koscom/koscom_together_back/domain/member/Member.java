package com.koscom.koscom_together_back.domain.member;

import com.koscom.koscom_together_back.domain.base.BaseTimeEntity;
import com.koscom.koscom_together_back.domain.accountInfo.AccountInfo;
import com.koscom.koscom_together_back.domain.invite.Invite;
import com.koscom.koscom_together_back.dto.HostDto;
import com.koscom.koscom_together_back.dto.MemberDto;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "MEMBER")
@EqualsAndHashCode
public class Member extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SEQ")
    private Long seq;

    @Column(name = "ID")
    private String id;

    @Column(name = "PASSWORD")
    private String password;

    @OneToMany(mappedBy = "member")
    private List<AccountInfo> accountInfos = new ArrayList<>();

    @Builder
    public Member(String id, String password) {
        this.id = id;
        this.password = password;
    }

    public static Member of(MemberDto request) {
        return Member.builder()
                .id(request.getId())
                .password(request.getPassword())
                .build();
    }

}
