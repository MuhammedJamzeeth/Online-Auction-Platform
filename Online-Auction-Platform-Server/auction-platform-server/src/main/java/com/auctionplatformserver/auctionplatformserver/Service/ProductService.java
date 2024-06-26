package com.auctionplatformserver.auctionplatformserver.Service;

import com.auctionplatformserver.auctionplatformserver.Entity.Product;

import java.util.List;

public interface ProductService {

//    List<Product> getProductsByCategory(String categoryName);

    List<Product> getAllProducts();

    Product getProductById(Long id);

    Product addProduct(Product product);

    Product updateProduct(Long id, Product product);

//    List<Product> findAllBySelectedCategory(String categoryName);
    void deleteProduct(Long id);

    public List<Product> fetchProductsByCategoryName(String categoryName);

}
