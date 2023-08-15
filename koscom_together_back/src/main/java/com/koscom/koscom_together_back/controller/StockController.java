package com.koscom.koscom_together_back.controller;

import com.koscom.koscom_together_back.domain.stock.EtfInfo;
import com.koscom.koscom_together_back.domain.stock.StockInfo;
import com.koscom.koscom_together_back.infrastructure.repository.EtfInfoRepository;
import com.koscom.koscom_together_back.infrastructure.repository.StockInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class StockController {

    private final StockInfoRepository stockInfoRepository;
    private final EtfInfoRepository etfInfoRepository;

    // domestic stocks - 국내 주식
    @GetMapping("/domesticStockList")
    public ResponseEntity<List<StockInfo>> getDomesticStockList() {
        List<StockInfo> stockInfoList = stockInfoRepository.findAll();
        return ResponseEntity.ok(stockInfoList);
    }
    // ETF
    @GetMapping("/ETFList")
    public ResponseEntity<List<EtfInfo>> getEtfList(){
        List<EtfInfo> etfInfoList = etfInfoRepository.findAll();
        return ResponseEntity.ok(etfInfoList);
    }
    // 보유 주식 - 해당 공동 계좌에서 보유한 주식 현황.
}
