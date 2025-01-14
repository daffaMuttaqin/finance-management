package com.sim.finance_management.repository;

import com.sim.finance_management.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;  

public interface ExpenseRepository extends JpaRepository<Expense, Long> {  
}  
