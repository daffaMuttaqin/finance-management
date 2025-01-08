package com.sim.finance_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sim.finance_management.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {}