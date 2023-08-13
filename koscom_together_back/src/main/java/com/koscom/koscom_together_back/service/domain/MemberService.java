package com.koscom.koscom_together_back.service.domain;

import com.koscom.koscom_together_back.domain.member.Member;

public interface MemberService {
    Member findMember(String memberId);
}
