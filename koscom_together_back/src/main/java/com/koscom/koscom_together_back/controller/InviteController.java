package com.koscom.koscom_together_back.controller;
import java.io.IOException;
import com.koscom.koscom_together_back.SseConfig.SseEmitters;
import com.koscom.koscom_together_back.dto.AccountDto;
import com.koscom.koscom_together_back.dto.InviteDto;
import com.koscom.koscom_together_back.service.DepositAccountService;
import com.koscom.koscom_together_back.service.InviteService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;
import com.koscom.koscom_together_back.dto.AccountDto;

@RestController
@RequiredArgsConstructor
@Slf4j
public class InviteController {
    private final SseEmitters sseEmitters;
    private final InviteService inviteService;
    private final DepositAccountService depositAccountService;

    // create invite connection
    @GetMapping(value = "/invite", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public ResponseEntity<SseEmitter> getInviteConnection(@RequestParam("host")String hostId) {
        SseEmitter emitter = new SseEmitter();
        sseEmitters.add(emitter, hostId);
        try {
            // send dummy data.
            emitter.send(SseEmitter.event()
                    .name("connect")
                    .data("connected!"));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        // return new emitter for connection
        return ResponseEntity.ok(emitter);
    }

    // make invite event
    @PostMapping("/invite")
    public ResponseEntity<Void> invite(@RequestParam("host")String hostId, @RequestParam("account")String account,
                                       @RequestParam("invitee")String inviteeId) {
        sseEmitters.invite(hostId, account, inviteeId);
        return ResponseEntity.ok().build();
    }

    //
    @PostMapping("/invite_agree")
    public ResponseEntity<Void> invite_agree(@RequestBody InviteDto inviteDto){
        if(inviteDto.getAgree().equals("yes")){
            /*System.out.println("!!!yes");
            System.out.println("inviteDto = ");
            System.out.println(inviteDto.getAccount());
            System.out.println(inviteDto.getInvitee());
            System.out.println(inviteDto.getDepositAccount().getNickName());
            System.out.println(inviteDto.getDepositAccount().getDepositAccountCode());
            System.out.println(inviteDto.getDepositAccount().getDepositAccountId());*/
            inviteService.addInvitee(inviteDto.getAccount(), inviteDto.getInvitee());
            depositAccountService.addDepositAccount(inviteDto.getInvitee(), inviteDto.getDepositAccount());
        }
        return ResponseEntity.ok().build();
    }
}
