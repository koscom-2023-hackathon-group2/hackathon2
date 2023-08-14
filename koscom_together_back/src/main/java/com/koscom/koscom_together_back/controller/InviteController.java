package com.koscom.koscom_together_back.controller;
import java.io.IOException;
import com.koscom.koscom_together_back.configuration.SseEmitters;
import com.koscom.koscom_together_back.dto.InviteDto;
import com.koscom.koscom_together_back.service.DepositAccountService;
import com.koscom.koscom_together_back.service.InviteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
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
            inviteService.addInvitee(inviteDto.getAccount(), inviteDto.getInvitee());
            depositAccountService.addDepositAccount(inviteDto.getInvitee(), inviteDto.getDepositAccount());
        }
        return ResponseEntity.ok().build();
    }
}
