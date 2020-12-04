package com.example.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.example.demo.entity.Users;
public interface UserRepository	extends CrudRepository<Users, Integer> {

	List<Users> findByName(String name);
	
}
