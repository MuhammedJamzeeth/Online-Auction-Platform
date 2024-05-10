package com.auctionplatformserver.auctionplatformserver.Service;

import com.auctionplatformserver.auctionplatformserver.Entity.Category;
import com.auctionplatformserver.auctionplatformserver.Entity.Product;

import java.util.List;

public interface CategoryService {
//    List<Category> getAllCategories();
    public List<Category> fetchCategoryList();

    Category addCategory(Category category);

    Category updateCategory(Long id, Category category);

    List<Product> getCategoryDetails(Long id);

    public void deleteCategory(Long id);
}
