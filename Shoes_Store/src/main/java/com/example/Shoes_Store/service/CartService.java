package com.example.Shoes_Store.service;

import com.example.Shoes_Store.model.Cart;
import com.example.Shoes_Store.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;


    public List<Cart> findAll(){
        return cartRepository.findAll();
    }

    public Optional<Cart> findById(Integer id){
        return cartRepository.findById(id);
    }

    public Cart save(Cart cart){
        return cartRepository.save(cart);
    }

    public void deleteById(Integer id){
        cartRepository.deleteById(id);
    }
}
