package com.koscom.koscom_together_back.configuration;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.CopyOnWriteArrayList;

@Component
@Slf4j
public class SseEmitters {

    class Pair<T, U>{
        T first;
        U second;
        Pair(T t, U u){
            this.first = t; this.second = u;
        }
    }

    private final List<Pair<SseEmitter, String>> emitters = new CopyOnWriteArrayList<>();

    // add new connection to "emitters".
    public SseEmitter add(SseEmitter emitter, String hostId) {
        Pair<SseEmitter, String> emit = new Pair(emitter, hostId);
        this.emitters.add(emit);
        log.info("new emitter added: {} - hostId : {}", emitter, hostId);
        emitter.onCompletion(() -> {
            log.info("onCompletion callback");
            this.emitters.remove(emit);    // 만료되면 리스트에서 삭제
        });
        emitter.onTimeout(() -> {
            log.info("onTimeout callback");
            emitter.complete();
        });

        return emitter;
    }

    // send invite event to invitee
    public void invite(String hostId, String account, String inviteeId) {
        log.info("send invite event");
        SseEmitter emitter;
        // find invitee's sse emitter
        for (Pair<SseEmitter, String> sseEmitterStringPair : emitters) {
            if (Objects.equals(inviteeId, sseEmitterStringPair.second)) {
                emitter = sseEmitterStringPair.first;
                // send the event.
                try {
                    emitter.send(SseEmitter.event()
                            .name("invite")
                            .data(hostId)
                            .data(account));
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
                break;
            }
        }
    }
}