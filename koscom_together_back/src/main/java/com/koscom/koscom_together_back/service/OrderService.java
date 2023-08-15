package com.koscom.koscom_together_back.service;

import com.koscom.koscom_together_back.dto.OrderDto;
import com.koscom.koscom_together_back.protocol.response.OrderHistoryResponse;

import java.util.List;

public interface OrderService {
    void order(OrderDto request) throws Exception;

    List<OrderHistoryResponse> getOrderHistory(String accountId);
}
