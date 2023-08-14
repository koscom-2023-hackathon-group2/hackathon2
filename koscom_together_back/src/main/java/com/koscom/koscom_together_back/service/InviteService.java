package com.koscom.koscom_together_back.service;

import com.koscom.koscom_together_back.dto.AccountDto;

public interface InviteService {

    void addInvitee(String accountId, String inviteeId);
}
