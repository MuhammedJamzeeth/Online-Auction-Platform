package com.auctionplatformserver.auctionplatformserver.Controller;

import com.auctionplatformserver.auctionplatformserver.Authentication.AuthenticationRequest;
import com.auctionplatformserver.auctionplatformserver.Authentication.AuthenticationService;
import com.auctionplatformserver.auctionplatformserver.Authentication.RegisterRequest;
import com.auctionplatformserver.auctionplatformserver.Entity.User;
import com.auctionplatformserver.auctionplatformserver.Repository.UserRepository;
import com.auctionplatformserver.auctionplatformserver.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    private UserService userService;
    private final AuthenticationManager authenticationManager;
    private final AuthenticationService authenticationService;


    public UserController( AuthenticationManager authenticationManager, AuthenticationService authenticationService) {
        this.authenticationManager = authenticationManager;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody AuthenticationRequest request){
        if(request.getEmail().isEmpty()){
            return new ResponseEntity<>("Email cannot be empty", HttpStatus.BAD_REQUEST);
        }
        if(request.getPassword().isEmpty()){
            return new ResponseEntity<>("Password cannot be empty", HttpStatus.BAD_REQUEST);
        }
        if(!(userRepository.existsByEmail(request.getEmail()))){
            return new ResponseEntity<>("Email not find register first", HttpStatus.BAD_REQUEST);
        }
        if(!(authenticationService.matchPassword(request.getEmail(), request.getPassword()))){
            return new ResponseEntity<>("Incorrect password", HttpStatus.UNAUTHORIZED);
        }

        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
    //    @PostMapping("/register")
//    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest){
//
//        if(registerRequest.getFirstName().isEmpty()){
//            return new ResponseEntity<>("First Name and Last Name cannot be empty", HttpStatus.BAD_REQUEST);
//        }
//        if(userRepository.existsByEmail(registerRequest.getEmail())){
//            return new ResponseEntity<>("Email Already Taken", HttpStatus.BAD_REQUEST);
//        }
//        if (registerRequest.getPassword().length() < 8) {
//            return ResponseEntity.badRequest().body("Password must be at least 8 characters long");
//        }
//        return ResponseEntity.ok(authenticationService.register(registerRequest));
//
//    }
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@ModelAttribute RegisterRequest registerRequest){
        if(userRepository.existsByEmail(registerRequest.getEmail())){
            return new ResponseEntity<>("Email Already Taken", HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.ok(authenticationService.register(registerRequest));

    }

    @GetMapping("/getallcustomers")
    public List<User> getAllCustomers() {
        return userService.getAllCustomers();
    }
}
