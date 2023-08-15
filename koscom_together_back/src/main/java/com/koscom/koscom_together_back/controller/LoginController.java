package com.koscom.koscom_together_back.controller;

import com.koscom.koscom_together_back.domain.member.Member;
import com.koscom.koscom_together_back.domain.stock.EtfInfo;
import com.koscom.koscom_together_back.domain.stock.StockInfo;
import com.koscom.koscom_together_back.dto.MemberDto;
import com.koscom.koscom_together_back.infrastructure.repository.EtfInfoRepository;
import com.koscom.koscom_together_back.infrastructure.repository.MemberRepository;
import com.koscom.koscom_together_back.infrastructure.repository.StockInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class LoginController {

    private final MemberRepository memberRepository;

    @GetMapping("/login")
    public ResponseEntity<Object> addNewMember(@RequestParam("id")String id, @RequestParam("pw")String pw) {
        // find and return member object
        Member member = memberRepository.findByIdAndPassword(id, pw);
        return ResponseEntity.ok(MemberDto.builder().member(member).build());
    }
}
