package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;


public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductRepository productReposirory;
	
	@Override
	public Iterable<Product> findAll() {
		// TODO Auto-generated method stub
		return productReposirory.findAll();
	}

	@Override
	public List<Product> search(String term) {
		// TODO Auto-generated method stub
		return productReposirory.findByName(term);
	}

	@Override
	public Optional<Product> findOne(Integer id) {
		// TODO Auto-generated method stub
		return productReposirory.findById(id);
	}

	@Override
	public void save(Product product) {
		// TODO Auto-generated method stub
		productReposirory.save(product);
	}

	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		productReposirory.deleteById(id);
	}
	
}
