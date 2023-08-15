package com.koscom.koscom_together_back.service;

import com.koscom.koscom_together_back.dto.OrderDto;

public interface OrderService {
    void order(OrderDto request) throws Exception;
}
