package com.auctionplatformserver.auctionplatformserver.Service;

import com.auctionplatformserver.auctionplatformserver.Entity.Order;

import java.util.List;

public interface OrderService {
    List<Order> getAllOrders();
}

