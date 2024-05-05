package com.auctionplatformserver.auctionplatformserver.Repository;

import com.auctionplatformserver.auctionplatformserver.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
