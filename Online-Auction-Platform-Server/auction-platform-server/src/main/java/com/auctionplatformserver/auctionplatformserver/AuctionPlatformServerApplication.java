package com.auctionplatformserver.auctionplatformserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication
public class AuctionPlatformServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuctionPlatformServerApplication.class, args);
	}

}
