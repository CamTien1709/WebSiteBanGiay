package com.example.Shoes_Store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CartID")
    private Integer cartId;

    @Column(name = "AccountID")
    private Integer accountId;

    @Column(name = "ShoeID")
    private Integer shoeId;

    @Column(name = "Quantity", nullable = false)
    private Integer quantity;

    // Constructors
    public Cart() {}

    public Cart(Integer accountId, Integer shoeId, Integer quantity) {
        this.accountId = accountId;
        this.shoeId = shoeId;
        this.quantity = quantity;
    }

    // Getters and Setters
    public Integer getCartId() {
        return cartId;
    }

    public void setCartId(Integer cartId) {
        this.cartId = cartId;
    }

    public Integer getAccountId() {
        return accountId;
    }

    public void setAccountId(Integer accountId) {
        this.accountId = accountId;
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

    @Override
    public String toString() {
        return "Cart{" +
                "cartId=" + cartId +
                ", accountId=" + accountId +
                ", medicineId=" + shoeId +
                ", quantity=" + quantity +
                '}';
    }
}