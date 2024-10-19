package com.example.Shoes_Store.service;

import com.example.Shoes_Store.model.Shoes;
import com.example.Shoes_Store.repository.ShoesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShoesService  {

    @Autowired
    private ShoesRepository shoesRepository;

    public List<Shoes> findAll(){
        return shoesRepository.findAll();
    }

    public Optional<Shoes> findById(Integer id){
        return shoesRepository.findById(id);
    }

    public Shoes save(Shoes shoes){
        return shoesRepository.save(shoes);
    }

    public void deleteById(Integer id){
        shoesRepository.deleteById(id);
    }
}
