package com.auctionplatformserver.auctionplatformserver.Controller;
import com.auctionplatformserver.auctionplatformserver.Entity.Customer;
import com.auctionplatformserver.auctionplatformserver.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @PostMapping("/savecustomer")
    public Customer saveCustomer(@RequestBody Customer customer) {
        return customerService.saveCustomer(customer);
    }

    @GetMapping("getallcustomers")
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @DeleteMapping("deletecustomer/{id}")
    public void deleteCustomer(@PathVariable Long id) {
        customerService.deleteCustomer(id);
    }
}
