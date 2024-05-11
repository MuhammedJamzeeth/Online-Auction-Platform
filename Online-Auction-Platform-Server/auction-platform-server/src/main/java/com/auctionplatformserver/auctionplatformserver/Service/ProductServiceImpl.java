package com.auctionplatformserver.auctionplatformserver.Service;

import com.auctionplatformserver.auctionplatformserver.Entity.Product;
import com.auctionplatformserver.auctionplatformserver.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long id) {
        Optional<Product> productOptional = productRepository.findById(id);
        return productOptional.orElse(null);
    }

    @Override
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }



    @Override
    public Product updateProduct(Long id, Product updateProduct) {
        Optional<Product> existingProductOptional = productRepository.findById(id);

        if (existingProductOptional.isPresent()) {
            Product existingProduct = existingProductOptional.get();
            existingProduct.setName(updateProduct.getName());
            existingProduct.setDescription(updateProduct.getDescription());
            existingProduct.setCurrentPrice(updateProduct.getCurrentPrice());
            existingProduct.setStartTime(updateProduct.getStartTime());
            existingProduct.setEndTime(updateProduct.getEndTime());
            existingProduct.setSelectedCategory(updateProduct.getSelectedCategory());
            existingProduct.setImage(updateProduct.getImage());

            return productRepository.save(existingProduct);
        } else {
            throw new RuntimeException("Product not found with id: " + id);
        }
    }

//    @Override
//    public List<Product> getProductsByCategoryId(Long categoryId) {
//        return productRepository.findByCategory_Id(categoryId);
//    }


    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
