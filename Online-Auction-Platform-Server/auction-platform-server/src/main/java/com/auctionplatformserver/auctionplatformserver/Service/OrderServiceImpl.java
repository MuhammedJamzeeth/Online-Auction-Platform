package com.auctionplatformserver.auctionplatformserver.Service;

import com.auctionplatformserver.auctionplatformserver.Entity.Order;
import com.auctionplatformserver.auctionplatformserver.Model.OrderModel;
import com.auctionplatformserver.auctionplatformserver.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public List<OrderModel> getAllOrders() {
        return orderRepository.findAll().stream().map(this::mapToDTO).collect(Collectors.toList());
    }

    private OrderModel mapToDTO(Order order) {
        return OrderModel.builder()
                .orderId(order.getOrder_id())
                .winPrice(order.getWin_price())
                .orderStatus(order.getOrder_status())
                .productName(order.getProduct().getName())
                .userName(order.getUser().getFirstName())
                .build();
    }

}

