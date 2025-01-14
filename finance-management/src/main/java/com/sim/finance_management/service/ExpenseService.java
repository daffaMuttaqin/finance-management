package com.sim.finance_management.service;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Service;

import com.sim.finance_management.entity.Expense;
import com.sim.finance_management.repository.ExpenseRepository; 

@Service
public class ExpenseService {  
    @Autowired  
    private ExpenseRepository expenseRepository;  
  
    public List<Expense> getAllExpenses() {  
        return expenseRepository.findAll();  
    }  
  
    public Expense addExpense(Expense expense) {  
        return expenseRepository.save(expense);  
    }  

    // Metode untuk menghapus pengeluaran berdasarkan ID  
    public void deleteExpense(Long id) {  
        expenseRepository.deleteById(id);  
    }  
}  
