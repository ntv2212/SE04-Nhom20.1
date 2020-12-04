package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.entity.Users;
import com.example.demo.repository.UserRepository;

public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository; 
	
	@Override
	public Iterable<Users> findAll() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	@Override
	public Optional<Users> findOne(Integer id) {
		// TODO Auto-generated method stub
		return userRepository.findById(id);
	}

	@Override
	public void save(Users user) {
		// TODO Auto-generated method stub
		userRepository.save(user);
	}

	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		userRepository.deleteById(id);
	}

}
