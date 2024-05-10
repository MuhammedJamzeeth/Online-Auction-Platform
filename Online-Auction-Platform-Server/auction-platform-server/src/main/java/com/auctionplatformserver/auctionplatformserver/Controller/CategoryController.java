package com.auctionplatformserver.auctionplatformserver.Controller;

import com.auctionplatformserver.auctionplatformserver.Entity.Category;
import com.auctionplatformserver.auctionplatformserver.Entity.Product; // Import Product entity
import com.auctionplatformserver.auctionplatformserver.Repository.CategoryRepository;
import com.auctionplatformserver.auctionplatformserver.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/category")
    public ResponseEntity<List<Category>> fetchCategoryList(){
        List<Category> cat = categoryRepository.findAll();
        return ResponseEntity.ok(cat);
    }

    @DeleteMapping("/category/delete/{category_id}")
    public void deleteCategory(@PathVariable("category_id") Long id){
        categoryRepository.deleteById(id);
    }
    @PostMapping("/category/add")
    public ResponseEntity<Category> addCategory(@RequestBody Category category){
        Category addCategory = categoryService.addCategory(category);

        return ResponseEntity.ok(addCategory);
    }


    @PutMapping("/category/update/{category_id}")
    public ResponseEntity<Category> updateCategory(@PathVariable("category_id") Long id, @RequestBody Category category){
        Category updatedCategory = categoryService.updateCategory(id, category);

        if(updatedCategory == null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(updatedCategory);
    }

//    @GetMapping("/{id}/details")
//    public List<Product> getCategoryDetails(@PathVariable Long id) {
//        return categoryService.getCategoryDetails(id);
//    }
}
