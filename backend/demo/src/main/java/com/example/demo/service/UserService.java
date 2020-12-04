package com.example.demo.service;

import java.util.Optional;
import com.example.demo.entity.Users;

public interface UserService {
	
	Iterable<Users> findAll();
	
	Optional<Users> findOne(Integer id);
	
	void save(Users user);
	
	void delete(Integer id);
}
