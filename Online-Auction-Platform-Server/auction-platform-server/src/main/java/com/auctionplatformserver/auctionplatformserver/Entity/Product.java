    package com.auctionplatformserver.auctionplatformserver.Entity;

    import jakarta.persistence.*;
    import lombok.Data;

    import java.time.LocalDateTime;

    @Entity
    @Data
    @Table(name = "product")
    public class Product {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id;
        private String name;
        private String description;

        @Column(name = "starting_price")
        private double startingPrice;

        @Column(name = "current_price")
        private double currentPrice;

        @Column(name = "start_time")
        private LocalDateTime startTime;

        @Column(name = "end_time")
        private LocalDateTime endTime;

        private String selectedCategory;

        @Lob
        @Column(name = "product_image", columnDefinition = "LONGBLOB")
        private byte[] image;

        @ManyToOne
        @JoinColumn(name = "category_id", nullable = false)
        private Category category;
    }
