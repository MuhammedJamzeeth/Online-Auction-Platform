package com.auctionplatformserver.auctionplatformserver.Controller;

import com.auctionplatformserver.auctionplatformserver.Entity.User;
import com.auctionplatformserver.auctionplatformserver.Repository.UserRepository;
import com.auctionplatformserver.auctionplatformserver.Service.UserService;
import lombok.Builder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@Builder
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;
    @PostMapping("/api/users/register")
    public ResponseEntity<String> addUser(@RequestBody User user) {

        if(userRepository.existsByEmail(user.getEmail())){
            return new ResponseEntity<>("Email Already Taken", HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
    }
}
