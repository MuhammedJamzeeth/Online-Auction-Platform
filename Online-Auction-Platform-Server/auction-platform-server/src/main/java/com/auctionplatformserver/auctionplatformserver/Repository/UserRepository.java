package com.auctionplatformserver.auctionplatformserver.Repository;

import com.auctionplatformserver.auctionplatformserver.Entity.Role;
import com.auctionplatformserver.auctionplatformserver.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);
    Optional<User> findByEmail(String email);
    List<User> findAllByRole(Role role);

//    List<User> get();
}
