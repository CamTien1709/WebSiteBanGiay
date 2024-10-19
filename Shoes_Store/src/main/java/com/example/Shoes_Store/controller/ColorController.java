package com.example.Shoes_Store.controller;

import com.example.Shoes_Store.model.Color;
import com.example.Shoes_Store.service.ColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/colors")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class ColorController {

    @Autowired
    private ColorService colorService;

    @GetMapping("/getAll")
    public List<Color> getAllColor(){
        return colorService.findAll();
    }

    @GetMapping("/getColor/{colorId}")
    public ResponseEntity<Color> getColorById(@PathVariable Integer colorId){
        Optional<Color> color = colorService.findById(colorId);
        return color.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }


    @PostMapping("/create")
    public Color createColor(@RequestBody Color color){
        return colorService.save(color);
    }
    @PutMapping("/update/{colorID}")
    public ResponseEntity<Color> updateColor(@PathVariable Integer colorID, @RequestBody Color color){
        if(colorService.findById(colorID).isPresent()){
            Color updatedColor = colorService.save(color);
            return ResponseEntity.ok(updatedColor);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/delete/{colorID}")
    public ResponseEntity<Color> deleteColor(@PathVariable Integer colorID){
        if(colorService.findById(colorID).isPresent()){
            colorService.deleteById(colorID);
            return ResponseEntity.ok().build();
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}
