package com.example.Shoes_Store.controller;

import com.example.Shoes_Store.model.Shoes;
import com.example.Shoes_Store.service.ShoesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/shoes")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class ShoesController {

    @Autowired
    ShoesService shoesService;

    @GetMapping("/getAll")
    public List<Shoes> getAllShoes() {
        return shoesService.findAll();
    }

    @GetMapping("/getShoes/{shoeId}")
    public ResponseEntity<Shoes> getShoesById(@PathVariable Integer shoeId) {
        Optional<Shoes> shoes = shoesService.findById(shoeId);
        return shoes.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public Shoes createShoes(@RequestBody Shoes shoes) {
        return shoesService.save(shoes);
    }

    @PutMapping("/update/{shoeId}")
    public ResponseEntity<Shoes> updateShoes(@PathVariable Integer shoeId, @RequestBody Shoes shoes) {
        if (shoesService.findById(shoeId).isPresent()) {
            shoes.setShoesId(shoeId);
            return ResponseEntity.ok(shoesService.save(shoes));
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete/{shoeId}")
    public ResponseEntity<Shoes> deleteShoes(@PathVariable Integer shoeId) {
        if (shoesService.findById(shoeId).isPresent()) {
            shoesService.deleteById(shoeId);
            return ResponseEntity.noContent().build();
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}
