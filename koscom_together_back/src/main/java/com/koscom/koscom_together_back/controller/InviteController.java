package com.koscom.koscom_together_back.controller;
import java.io.IOException;
import com.koscom.koscom_together_back.SseConfig.SseEmitters;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@RestController
@Slf4j
public class InviteController {
    private final SseEmitters sseEmitters;

    public InviteController(SseEmitters sseEmitters) {
        this.sseEmitters = sseEmitters;
    }

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
    public ResponseEntity<Void> invite(@RequestParam("host")String hostId, @RequestParam("account")int account,
                                       @RequestParam("invitee")String inviteeId) {
        sseEmitters.invite(hostId, account, inviteeId);
        return ResponseEntity.ok().build();
    }

    //
    @PostMapping("/invite_agree")
    public ResponseEntity<Void> invite_agree(@RequestParam("agree")String agree, @RequestParam("account")int account, @RequestParam("invitee")String inviteeId){
        if(agree.equals("yes")){
            // 모임 계좌 가져오기
            // 모임 계좌에 invitee 추가
            // invitee의 모임 계좌에 추가
        }
        return ResponseEntity.ok().build();
    }
}
