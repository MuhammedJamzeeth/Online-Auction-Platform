package com.auctionplatformserver.auctionplatformserver.Service;

import com.auctionplatformserver.auctionplatformserver.Entity.Customer;
import com.auctionplatformserver.auctionplatformserver.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer saveCustomer(Customer customer) {
        Customer customer1 = new Customer();
        customer1.setCusName(customer.getCusName());
        customer1.setCusAddress(customer.getCusAddress());
        customer1.setCusEmail(customer.getCusEmail());
        customer1.setCusPhone(customer.getCusPhone());

        return customerRepository.save(customer1);
    }

    @Override
    public void deleteCustomer(Long id) {
        if (customerRepository.existsById(Math.toIntExact(id))){
            customerRepository.deleteById(Math.toIntExact(id));
        }else {
            throw new IllegalArgumentException("Customer not found");
        }
    }
}
