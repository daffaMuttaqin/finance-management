package com.sim.finance_management.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
  
@Entity  
public class Expense {  
    @Id  
    @GeneratedValue(strategy = GenerationType.IDENTITY)  
    private Long id;  
    private String description;  
    private BigDecimal amount;  
    private LocalDateTime expenseTime; 
  
    // Getters and Setters  
    public Long getId() {  
        return id;  
    }  
  
    public void setId(Long id) {  
        this.id = id;  
    }  
  
    public String getDescription() {  
        return description;  
    }  
  
    public void setDescription(String description) {  
        this.description = description;  
    }  
  
    public BigDecimal getAmount() {  
        return amount;  
    }  
  
    public void setAmount(BigDecimal amount) {  
        this.amount = amount;  
    }  
  
    public LocalDateTime getExpenseTime() {
        return expenseTime;
    }

    public void setExpenseTime(LocalDateTime expenseTime) {
        this.expenseTime = expenseTime;
    }
}  