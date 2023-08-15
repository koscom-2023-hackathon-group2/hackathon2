package com.koscom.koscom_together_back.controller;

import com.koscom.koscom_together_back.dto.OrderDto;
import com.koscom.koscom_together_back.protocol.response.OrderHistoryResponse;
import com.koscom.koscom_together_back.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/order")
    public void order(@RequestBody OrderDto request) throws Exception {
       orderService.order(request);
    }

    @GetMapping("/order/{accountId}")
    public List<OrderHistoryResponse> getOrderHistory(@PathVariable final String accountId) {
        return orderService.getOrderHistory(accountId);
    }

}
