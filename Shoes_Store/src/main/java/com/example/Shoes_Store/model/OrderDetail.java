package com.example.Shoes_Store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "orderdetails")
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "OrderDetailID")
    private Integer orderDetailId;

    @Column(name = "OrderID")
    private Integer orderId;

    @Column(name = "ShoeID")
    private Integer shoeId;

    @Column(name = "Quantity", nullable = false)
    private Integer quantity;

    @Column(name = "Price", nullable = false)
    private Double price;

    // Constructors
    public OrderDetail() {}

    public OrderDetail(Integer orderId, Integer shoeId, Integer quantity, Double price) {
        this.orderId = orderId;
        this.shoeId = shoeId;
        this.quantity = quantity;
        this.price = price;
    }

    // Getters and Setters
    public Integer getOrderDetailId() {
        return orderDetailId;
    }

    public void setOrderDetailId(Integer orderDetailId) {
        this.orderDetailId = orderDetailId;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Integer getShoeId() {
        return shoeId;
    }

    public void setShoeId(Integer shoeId) {
        this.shoeId = shoeId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "OrderDetail{" +
                "orderDetailId=" + orderDetailId +
                ", orderId=" + orderId +
                ", shoeId=" + shoeId +
                ", quantity=" + quantity +
                ", price=" + price +
                '}';
    }
}