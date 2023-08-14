package com.koscom.koscom_together_back.dto;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class FollowDto {
    private String hostId;
    private String account;
    private String inviteeId;
}
