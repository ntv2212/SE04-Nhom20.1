package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


//Username, Password, Address, Products, SDT, Gender, Airpay

@Entity
@Table(name = "users")
public class Users {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name =  "Username")
	private String username;
	
	@Column(name = "Password")
	private String password;
	
	@Column(name = "Address")
	private String address;
	
	@Column(name = "Products")
	private String products;
	
	@Column(name = "SDT")
	private int sdt;
	
	@Column(name = "Gender")
	private String gender;
	
	@Column(name = "Airpay")
	private int airpay;
	
	public Users(String username, String password, String address, String products, int sdt, String gender, int airpay) {
		this.username = username;
		this.password = password;
		this.address = address;
		this.products = products;
		this.sdt = sdt;
		this.gender = gender;
		this.airpay = airpay;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getProducts() {
		return products;
	}

	public void setProducts(String products) {
		this.products = products;
	}

	public int getSdt() {
		return sdt;
	}

	public void setSdt(int sdt) {
		this.sdt = sdt;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getAirpay() {
		return airpay;
	}

	public void setAirpay(int airpay) {
		this.airpay = airpay;
	}

	@Override
	public String toString() {
		return "Users [id=" + id + ", password=" + password + ", address=" + address + ", products=" + products
				+ ", sdt=" + sdt + ", gender=" + gender + ", airpay=" + airpay + "]";
	}
	
	public Users() {
		
	}
}	
