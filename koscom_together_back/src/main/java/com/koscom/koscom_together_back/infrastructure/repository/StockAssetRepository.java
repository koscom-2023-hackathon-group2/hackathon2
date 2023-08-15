package com.koscom.koscom_together_back.infrastructure.repository;

import com.koscom.koscom_together_back.domain.stock.StockAsset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockAssetRepository extends JpaRepository<StockAsset, Long> {
}
