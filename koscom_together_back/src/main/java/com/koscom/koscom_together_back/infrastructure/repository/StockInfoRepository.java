package com.koscom.koscom_together_back.infrastructure.repository;

import com.koscom.koscom_together_back.domain.stock.StockInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StockInfoRepository extends JpaRepository<StockInfo, Long> {
    Optional<StockInfo> findById(Long id);
    List<StockInfo> findByStockNumberIn(List<String> stockNumbers);
}
