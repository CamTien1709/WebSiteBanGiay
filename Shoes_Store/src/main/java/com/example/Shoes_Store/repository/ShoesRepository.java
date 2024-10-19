package com.example.Shoes_Store.repository;

import com.example.Shoes_Store.model.Shoes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoesRepository extends JpaRepository<Shoes, Integer> {
}