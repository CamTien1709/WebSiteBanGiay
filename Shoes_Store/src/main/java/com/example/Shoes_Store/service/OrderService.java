package com.example.Shoes_Store.service;

import com.example.Shoes_Store.model.Order;
import com.example.Shoes_Store.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> findAll(){
        return orderRepository.findAll();
    }

    public Optional<Order> findById(Integer id){
        return orderRepository.findById(id);
    }

    public Order save(Order order){
        return orderRepository.save(order);
    }

    public void deleteById(Integer id){
        orderRepository.deleteById(id);
    }
}