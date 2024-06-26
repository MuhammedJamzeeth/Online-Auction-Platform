package com.auctionplatformserver.auctionplatformserver.Controller;

import com.auctionplatformserver.auctionplatformserver.Entity.Product;
import com.auctionplatformserver.auctionplatformserver.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {


    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

//    @GetMapping("/category/{categoryName}")
//    public List<Product> getProductsByCategory(@PathVariable String categoryName) {
//        return productService.getProductsByCategory(categoryName);
//    }

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts(){
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }


    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id){
        Product product = productService.getProductById(id);

        if(product == null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(product);
    }

//    @GetMapping( "/products/category/{categoryId}")
//    public ResponseEntity<List<Product>> getProductsByCategoryId(@PathVariable Long categoryId) {
//        List<Product> products = productService.getProductsByCategoryId(categoryId);
//        if (products.isEmpty()) {
//            return ResponseEntity.notFound().build();
//        }
//        return ResponseEntity.ok(products);
//    }

    @GetMapping("/products/name/{name}")
    public List<Product> fetchProductsByCategoryName(@PathVariable("name") String categoryName) {
        return productService.fetchProductsByCategoryName(categoryName);
    }


    @PostMapping("/products/add")
    public ResponseEntity<Product> addProduct(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("startingPrice") String startingPrice,
            @RequestParam("currentPrice") String currentPrice,
            @RequestParam("startTime") String startTime,
            @RequestParam("endTime") String endTime,
            @RequestParam( defaultValue = "Toys") String selectedCategory,
            @RequestParam( defaultValue = "1") Long categoryId,
            @RequestParam(defaultValue = "") String userName,
            @RequestParam("image") MultipartFile image) {

        try {
            byte[] imageBytes = image.getBytes();

            Product product = new Product();
            product.setName(name);
            product.setDescription(description);
            product.setStartingPrice(Double.parseDouble(startingPrice));
            product.setCurrentPrice(Double.parseDouble(currentPrice));
            product.setStartTime(LocalDateTime.parse(startTime));
            product.setEndTime(LocalDateTime.parse(endTime));
            product.setUserName(userName);


//            product.setSelectedCategory(selectedCategory);
            product.setImage(imageBytes);

            Product addedProduct = productService.addProduct(product);
            System.out.println(addedProduct);
            return ResponseEntity.ok(addedProduct);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/products/update/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product){
        Product updatedProduct = productService.updateProduct(id, product);

        if(updatedProduct == null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(updatedProduct);

    }


    @DeleteMapping("/products/delete/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id){
        productService.deleteProduct(id);

        return ResponseEntity.noContent().build();
    }

//    @GetMapping("/product/{categoryName}")
//    public ResponseEntity<List<Product>> findAllBySelectedCategory(@RequestParam("categoryName") String categoryName) {
//        List<Product> products = productService.findAllBySelectedCategory(categoryName);
//        return ResponseEntity.ok(products);
//    }
}


