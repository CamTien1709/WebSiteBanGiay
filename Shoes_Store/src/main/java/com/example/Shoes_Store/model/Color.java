package com.example.Shoes_Store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "colors")
public class Color {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ColorID")
    private Integer colorID;

    @Column(name = "ColorName", nullable = false)
    private String colorName;

    public Color() {}

    public Color(String colorName) {
        this.colorName = colorName;
    }

    public Integer getColorID() {
        return colorID;
    }
    public void setColorID(Integer colorID) {
        this.colorID = colorID;
    }
    public String getColorName() {
        return colorName;
    }
    public void setColorName(String colorName) {
        this.colorName = colorName;
    }
    @Override
    public String toString() {
        return "Color{" +
                "colorId=" + colorID +
                ", colorName='" + colorName + '\'' +
                '}';
    }
}
