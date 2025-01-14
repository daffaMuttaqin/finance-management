package com.sim.finance_management.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sim.finance_management.entity.Expense;
import com.sim.finance_management.service.ExpenseService;

@RestController  
@RequestMapping("/api/expenses")  
public class ExpenseController {  
    @Autowired  
    private ExpenseService expenseService;  
    
    @CrossOrigin
    @GetMapping  
    public List<Expense> getAllExpenses() {  
        return expenseService.getAllExpenses();  
    }  
    
    @CrossOrigin
    @PostMapping  
    public Expense addExpense(@RequestBody Expense expense) { 
        expense.setExpenseTime(LocalDateTime.now()); 
        return expenseService.addExpense(expense);  
    }
    
    // Endpoint untuk menghapus pengeluaran berdasarkan ID  
    @CrossOrigin
    @DeleteMapping("/{id}")  
    public void deleteExpense(@PathVariable Long id) {  
        expenseService.deleteExpense(id);  
    }  
}  
