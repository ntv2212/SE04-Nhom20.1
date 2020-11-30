package com.example.demo.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.example.demo.entity.Product;

public interface ProductsRepository extends CrudRepository<Product, Long> {
	List<Product> findByName(String name);
}
