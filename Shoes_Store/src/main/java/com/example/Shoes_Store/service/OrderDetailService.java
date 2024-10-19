package com.example.Shoes_Store.service;

import com.example.Shoes_Store.model.OrderDetail;
import com.example.Shoes_Store.repository.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderDetailService {

    @Autowired
    private OrderDetailRepository orderDetailRepository;

    public List<OrderDetail> findAll(){
        return orderDetailRepository.findAll();
    }

    public Optional<OrderDetail> findById(Integer id){
        return orderDetailRepository.findById(id);
    }

    public OrderDetail save(OrderDetail orderDetail){
        return orderDetailRepository.save(orderDetail);
    }

    public void deleteById(Integer id){
        orderDetailRepository.deleteById(id);
    }
}
