package com.auctionplatformserver.auctionplatformserver.Service;

import com.auctionplatformserver.auctionplatformserver.Entity.Category;

import java.util.List;

public interface CategoryService {
//    List<Category> getAllCategories();
    public List<Category> fetchCategoryList();

    public void deleteCategory(Long id);
}
