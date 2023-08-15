package com.koscom.koscom_together_back.dto;

import com.koscom.koscom_together_back.domain.order.OrderType;
import com.koscom.koscom_together_back.domain.order.StockType;
import lombok.Data;

import javax.persistence.Column;

@Data
public class OrderDto {
    private Long seq;
    private String memberId;
    private String accountId;
    private String stockNumber;
    private OrderType orderType;
    private StockType stockType;
    private Integer count;
    private Long price;
    private String itemName;
    private String stockMarket;

}
