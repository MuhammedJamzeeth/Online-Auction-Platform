package com.auctionplatformserver.auctionplatformserver.Controller;

import com.auctionplatformserver.auctionplatformserver.Entity.Order;
import com.auctionplatformserver.auctionplatformserver.Repository.OrderRepository;
import com.auctionplatformserver.auctionplatformserver.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OrderController {

    @Autowired
    private OrderService orderService;
    private final OrderRepository orderRepository;

    public OrderController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @GetMapping("/getallorders")
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}

