package com.auctionplatformserver.auctionplatformserver.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Table(name = "Customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "cus_id", nullable = false)
    @JdbcTypeCode(SqlTypes.INTEGER)
    private Long cusId;

    private String cusName;
    private String cusEmail;
    private String cusAddress;
    private String cusPhone;
}
