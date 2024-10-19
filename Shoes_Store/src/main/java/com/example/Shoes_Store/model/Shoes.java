package com.example.Shoes_Store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "shoes")
public class Shoes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ShoeID")
    private Integer shoesId;

    @Column(name = "Name", nullable = false)
    private String name;

    @Column(name = "CategoryID")
    private Integer categoryId;

    @Column(name = "ManufacturerID")
    private Integer manufacturerId;

    @Column(name = "Price", nullable = false)
    private Double price;

    @Column(name = "StockQuantity", nullable = false)
    private Integer stockQuantity;

    @Column(name = "Description")
    private String description;

    @Column(name = "Size")
    private Integer size;

    @Column(name = "ColorID")
    private Integer colorId;

    // Constructors
    public Shoes() {}

    public Shoes(String name, Integer categoryId, Integer manufacturerId, Double price, Integer stockQuantity, String description, Integer size, Integer colorId) {
        this.name = name;
        this.categoryId = categoryId;
        this.manufacturerId = manufacturerId;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.description = description;
        this.size = size;
        this.colorId = colorId;
    }

    // Getters and Setters
    public Integer getShoesId() {
        return shoesId;
    }

    public void setShoesId(Integer shoesId) {
        this.shoesId = shoesId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public Integer getManufacturerId() {
        return manufacturerId;
    }

    public void setManufacturerId(Integer manufacturerId) {
        this.manufacturerId = manufacturerId;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(Integer stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

   public Integer getSize() {
        return size;
   }
   public void setSize(Integer size) {
        this.size = size;
   }
   public Integer getColorId() {
        return colorId;
   }
   public void setColorId(Integer colorId) {
        this.colorId = colorId;
   }

    @Override
    public String toString() {
        return "Medicine{" +
                "medicineId=" + shoesId +
                ", name='" + name + '\'' +
                ", categoryId=" + categoryId +
                ", manufacturerId=" + manufacturerId +
                ", price=" + price +
                ", stockQuantity=" + stockQuantity +
                ", description='" + description + '\'' +
                ", size=" + size +
                ", colorId=" + colorId +
                '}';
    }
}
