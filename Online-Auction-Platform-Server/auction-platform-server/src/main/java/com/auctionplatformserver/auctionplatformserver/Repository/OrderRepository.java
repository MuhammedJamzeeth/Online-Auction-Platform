package com.auctionplatformserver.auctionplatformserver.Repository;

import com.auctionplatformserver.auctionplatformserver.Entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    // add custom query methods here if needed
}

