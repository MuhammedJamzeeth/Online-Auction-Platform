package com.auctionplatformserver.auctionplatformserver.Repository;

import com.auctionplatformserver.auctionplatformserver.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {


//    List<Product> findByCategoryId(Long categoryId);

//    List<Product> findByCategory_Id(Long categoryId);

}
