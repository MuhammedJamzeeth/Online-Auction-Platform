package com.auctionplatformserver.auctionplatformserver.Service;

import com.auctionplatformserver.auctionplatformserver.Entity.User;

import java.util.List;


public interface UserService {
    User addUser(User user);
    List<User> getAllCustomers();
}
