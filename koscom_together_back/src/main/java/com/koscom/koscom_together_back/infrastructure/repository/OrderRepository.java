package com.koscom.koscom_together_back.infrastructure.repository;

import com.koscom.koscom_together_back.domain.order.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByAccountId(String accountId);
}
