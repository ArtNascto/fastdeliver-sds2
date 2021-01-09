package com.devsuperior.fastdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.fastdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
