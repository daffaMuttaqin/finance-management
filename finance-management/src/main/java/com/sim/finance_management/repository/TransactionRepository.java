package com.sim.finance_management.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.sim.finance_management.entity.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {}