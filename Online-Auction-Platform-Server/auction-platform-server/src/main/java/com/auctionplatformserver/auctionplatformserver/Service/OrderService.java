package com.auctionplatformserver.auctionplatformserver.Service;

import com.auctionplatformserver.auctionplatformserver.Model.OrderModel;

import java.util.List;

public interface OrderService {
    List<OrderModel> getAllOrders();
}

