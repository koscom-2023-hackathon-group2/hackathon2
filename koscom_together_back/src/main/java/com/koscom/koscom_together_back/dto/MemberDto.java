package com.koscom.koscom_together_back.dto;

import com.koscom.koscom_together_back.domain.member.Member;
import lombok.Builder;
import lombok.Data;

@Data
public class MemberDto {
    private String id;
    private String password;

    @Builder
    MemberDto(Member member){
        this.id = member.getId();
        this.password = member.getPassword();
    }
}
