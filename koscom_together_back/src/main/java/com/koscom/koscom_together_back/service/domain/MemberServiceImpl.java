package com.koscom.koscom_together_back.service.domain;

import com.koscom.koscom_together_back.domain.member.Member;
import com.koscom.koscom_together_back.infrastructure.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED)
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;

    @Override
    public Member findMember(String memberId) {
        return memberRepository.findById(memberId).orElseThrow();
    }
}
