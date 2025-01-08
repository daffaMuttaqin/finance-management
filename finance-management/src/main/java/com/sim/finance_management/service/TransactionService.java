package com.sim.finance_management.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.sim.finance_management.entity.Transaction;
import com.sim.finance_management.repository.TransactionRepository;

@Service
public class TransactionService {
    private final TransactionRepository transactionRepository;

    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    public Transaction saveTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    public void deleteTransaction(Long id) {
        transactionRepository.deleteById(id);
    }

    public Optional<Transaction> updateTransaction(Long id, Transaction newTransaction) {
        return transactionRepository.findById(id)
            .map(transaction -> {
                transaction.setProductName(newTransaction.getProductName());
                transaction.setQuantity(newTransaction.getQuantity());
                transaction.setTotalPrice(newTransaction.getTotalPrice());
                return transactionRepository.save(transaction);
            });
    }
}
