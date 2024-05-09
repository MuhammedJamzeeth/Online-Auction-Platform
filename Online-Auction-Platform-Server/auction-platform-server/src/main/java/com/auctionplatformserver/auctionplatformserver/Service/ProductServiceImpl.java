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
//        Optional<Product> productOptional = productRepository.findById(id);
//        return productOptional.orElse(null);
        System.out.println(productRepository.findById(id).get());
        return productRepository.findById(id).get();
    }

    @Override
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
<<<<<<< HEAD
    public Product updateProduct(Long id, Product updateProduct) {
        // Check if the product with the given id exists
        Optional<Product> existingProductOptional = productRepository.findById(id);

        if(existingProductOptional.isPresent()) {
            Product existingProduct = existingProductOptional.get();
            // Update the existing product with the new details
            existingProduct.setName(updateProduct.getName());
            existingProduct.setDescription(updateProduct.getDescription());
            existingProduct.setCurrentPrice(updateProduct.getCurrentPrice());
            existingProduct.setStartTime(updateProduct.getStartTime());
            existingProduct.setEndTime(updateProduct.getEndTime());
            existingProduct.setSelectedCategory(updateProduct.getSelectedCategory());
            existingProduct.setImage(updateProduct.getImage());

            // Save the updated product
            return productRepository.save(existingProduct);
        } else {
            // If the product does not exist, return null
            throw new RuntimeException("Product not found with id: " + id);
=======
    public Product updateProduct(Long id, Product product) {
        if(!productRepository.existsById(id)){
            return null;
>>>>>>> parent of fbaf923 (AddProduct)
        }

        product.setId(id);
        return productRepository.save(product);
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    @Override
    public Product fetchEmployeeById(Long id) {
        return productRepository.findById(id).get();
    }
}
