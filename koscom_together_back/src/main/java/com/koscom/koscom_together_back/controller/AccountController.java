package com.koscom.koscom_together_back.controller;

import com.koscom.koscom_together_back.domain.account.Account;
import com.koscom.koscom_together_back.dto.AccountDto;
import com.koscom.koscom_together_back.protocol.response.AccountResponse;
import com.koscom.koscom_together_back.service.GroupAccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

    @GetMapping("/{memberId}")
    public List<AccountResponse> getMemberAccounts(@PathVariable String memberId) {
        return groupAccountService.getGroupAccounts(memberId);
    }

}
