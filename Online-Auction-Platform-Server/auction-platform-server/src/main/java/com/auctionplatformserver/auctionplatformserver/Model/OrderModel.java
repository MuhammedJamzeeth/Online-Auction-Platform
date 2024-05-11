package com.auctionplatformserver.auctionplatformserver.Model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class OrderModel {
    private Long orderId;
    private int winPrice;
    private String orderStatus;
    private String productName;
    private String userName;
}
