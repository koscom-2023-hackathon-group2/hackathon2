package com.koscom.koscom_together_back.controller;

import com.koscom.koscom_together_back.dto.AccountDto;
import com.koscom.koscom_together_back.service.GroupAccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/group-account")
@RequiredArgsConstructor
public class AccountController {

    private final GroupAccountService groupAccountService;

    @PostMapping(value = "/create")
    public void createGroupAccount(@RequestHeader("X-MEMBER") String memberId,
                              @RequestBody AccountDto request) throws Exception {
        groupAccountService.createGroupAccount(memberId, request);
    }


}
