package com.koscom.koscom_together_back.controller;

import com.koscom.koscom_together_back.dto.OrderDto;
import com.koscom.koscom_together_back.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/order")
    public void order(@RequestBody OrderDto request) throws Exception {
       orderService.order(request);
    }

}
