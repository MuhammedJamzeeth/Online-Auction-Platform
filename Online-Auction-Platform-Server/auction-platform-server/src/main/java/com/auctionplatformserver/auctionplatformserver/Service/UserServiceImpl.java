package com.auctionplatformserver.auctionplatformserver.Service;

import com.auctionplatformserver.auctionplatformserver.Entity.Role;
import com.auctionplatformserver.auctionplatformserver.Entity.User;
import com.auctionplatformserver.auctionplatformserver.Repository.UserRepository;
import lombok.Builder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Builder
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public User addUser(User user) {
        User userAdd = new User();
        userAdd.setEmail(user.getEmail());
        userAdd.setFirstName(user.getFirstName());
        userAdd.setLastName(user.getLastName());
        userAdd.setAddress(user.getAddress());
        userAdd.setPassword(passwordEncoder.encode(user.getPassword()));
        userAdd.setPhoneNumber(user.getPhoneNumber());
        userRepository.save(user);
        return userAdd;

    }

    //geting the customer list based on role
    @Override
    public List<User> getAllCustomers() {
        return userRepository.findAllByRole(Role.USER);
    }
}
