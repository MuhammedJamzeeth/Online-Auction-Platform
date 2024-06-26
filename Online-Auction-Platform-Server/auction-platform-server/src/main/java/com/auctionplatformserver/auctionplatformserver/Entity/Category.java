package com.auctionplatformserver.auctionplatformserver.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "category_id") // Name of the primary key column in the category table
    private Long categoryId;

    private String name;
    private String description;

//    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
//    private List<Product> products;
}
