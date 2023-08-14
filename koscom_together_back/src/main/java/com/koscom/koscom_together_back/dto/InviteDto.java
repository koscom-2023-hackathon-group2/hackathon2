package com.koscom.koscom_together_back.dto;

import lombok.Data;

@Data
public class InviteDto{
    private String agree;
    private String account;
    private String invitee;
    private AccountDto depositAccount;
}
