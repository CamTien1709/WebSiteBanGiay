package com.example.Shoes_Store.service;

import com.example.Shoes_Store.model.Color;
import com.example.Shoes_Store.repository.ColorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ColorService {
    @Autowired
    private ColorRepository colorRepository;


    public List<Color> findAll() {
        return colorRepository.findAll();
    }

    public Optional<Color> findById(Integer id) {
        return colorRepository.findById(id);
    }

    public Color save(Color color) {
        return colorRepository.save(color);
    }
    public void deleteById(Integer id) {
        colorRepository.deleteById(id);
    }
}
