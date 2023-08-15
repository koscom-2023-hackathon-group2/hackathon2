package com.koscom.koscom_together_back.infrastructure.repository;

import com.koscom.koscom_together_back.domain.stock.EtfInfo;
import com.koscom.koscom_together_back.domain.stock.StockInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EtfInfoRepository extends JpaRepository<EtfInfo, Long> {

    Optional<EtfInfo> findById(Long id);
    List<EtfInfo> findByStockNumberIn(List<String> stockNumbers);
}
