package com.auctionplatformserver.auctionplatformserver.Entity;

import jakarta.persistence.*;
import jdk.jfr.Category;
import lombok.Data;

import java.security.PrivateKey;
import java.text.DecimalFormat;

@Entity
@Data
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String description;
    private double price;

    private String image;
    private String quantity;

//    @ManyToOne
//    @JoinColumn(name = "category_id")
//    private Category category;

}
