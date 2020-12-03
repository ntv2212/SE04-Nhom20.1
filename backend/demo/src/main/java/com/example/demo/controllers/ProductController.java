package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;


@RestController
@RequestMapping("/api")
public class ProductController {
	
	
	@Autowired
	ProductRepository repository;
	
	@GetMapping("/products")
	
	public List<Product> getAllProduct(){
		List<Product> products = new ArrayList<>();
		repository.findAll().forEach(products::add);
		return products;
	}
	
	@PostMapping("/addproduct")
	public Product postProduct(@RequestBody Product product) {
	
		Product _product = repository.save(new Product(product.getName(), product.getPrice(), product.getWarehouses(), product.getSize(), product.getColor(), product.getAmount()));
		return _product;
	}
	
	@DeleteMapping("/deleteproduct/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable("id") Integer id){
		repository.deleteById(id);
		return new ResponseEntity<String>("Product has been deleted !", HttpStatus.OK);
	}	
}
