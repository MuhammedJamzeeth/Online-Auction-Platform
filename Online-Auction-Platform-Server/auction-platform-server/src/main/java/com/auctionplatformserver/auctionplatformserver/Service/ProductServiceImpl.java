package com.auctionplatformserver.auctionplatformserver.Service;

import com.auctionplatformserver.auctionplatformserver.Entity.Product;
import com.auctionplatformserver.auctionplatformserver.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService{


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
    public Product updateProduct(Long id, Product product) {
        // Check if the product with the given id exists
        Optional<Product> existingProductOptional = productRepository.findById(id);

        if(existingProductOptional.isPresent()) {
            Product existingProduct = existingProductOptional.get();
            // Update the existing product with the new details
            existingProduct.setName(product.getName());
            existingProduct.setDescription(product.getDescription());
            existingProduct.setCurrentPrice(product.getCurrentPrice());
            existingProduct.setStartTime(product.getStartTime());
            existingProduct.setEndTime(product.getEndTime());
            existingProduct.setSelectedCategory(product.getSelectedCategory());
            existingProduct.setImage(product.getImage());

            // Save the updated product
            return productRepository.save(existingProduct);
        } else {
            // If the product does not exist, return null
            return null;
        }
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
