package com.koscom.koscom_together_back.controller;

import com.koscom.koscom_together_back.domain.member.Member;
import com.koscom.koscom_together_back.domain.stock.EtfInfo;
import com.koscom.koscom_together_back.domain.stock.StockInfo;
import com.koscom.koscom_together_back.dto.MemberDto;
import com.koscom.koscom_together_back.infrastructure.repository.EtfInfoRepository;
import com.koscom.koscom_together_back.infrastructure.repository.MemberRepository;
import com.koscom.koscom_together_back.infrastructure.repository.StockInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class LoginController {

    private final MemberRepository memberRepository;

    @PostMapping("/login")
    public ResponseEntity<Void> addNewMember(@RequestBody MemberDto memberDto) {
        // login 추가
        memberRepository.save(Member.of(memberDto));
        return ResponseEntity.ok().build();
    }
}
