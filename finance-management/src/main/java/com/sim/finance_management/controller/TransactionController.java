package com.sim.finance_management.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sim.finance_management.entity.Transaction;
import com.sim.finance_management.service.TransactionService;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {
    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @CrossOrigin
    @GetMapping
    public List<Transaction> getAllTransactions() {
        return transactionService.getAllTransactions();
    }

    @CrossOrigin
    @PostMapping
    public Transaction createTransaction(@RequestBody Transaction transaction) {
        transaction.setTransactionTime(LocalDateTime.now());
        return transactionService.saveTransaction(transaction);
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity<Transaction> updateTransaction(@PathVariable Long id, @RequestBody Transaction newTransaction) {
        return transactionService.updateTransaction(id, newTransaction)
            .map(updatedTransaction -> ResponseEntity.ok().body(updatedTransaction))
            .orElse(ResponseEntity.notFound().build());
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTransaction(@PathVariable Long id) {
        transactionService.deleteTransaction(id);
        return ResponseEntity.noContent().build();
    }
}