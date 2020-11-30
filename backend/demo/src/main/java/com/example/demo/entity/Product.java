package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "products")
public class Product {

		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private long id;
		
		@Column(name = "Name")
		private String name;
		
		@Column(name = "Price")
		private int price;
		
		@Column(name = "Warehousess")
		private String warehouses;
		
		@Column(name = "Size")
		private String size;
		
		@Column(name = "Color")
		private String color;
		
		@Column(name = "Amount")
		private int amount;
		
		public Product(String name, int price, String warehouses, String size, String color, int amount){
			this.name = name;
			this.price = price;
			this.warehouses = warehouses;
			this.size = size;
			this.color = color;
			this.amount = amount;
		}

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public int getPrice() {
			return price;
		}

		public void setPrice(int price) {
			this.price = price;
		}

		public String getWarehouses() {
			return warehouses;
		}

		public void setWarehouses(String warehouses) {
			this.warehouses = warehouses;
		}

		public String getSize() {
			return size;
		}

		public void setSize(String size) {
			this.size = size;
		}

		public String getColor() {
			return color;
		}

		public void setColor(String color) {
			this.color = color;
		}

		public int getAmount() {
			return amount;
		}

		public void setAmount(int amount) {
			this.amount = amount;
		}
		
		public Product(){
		
		}
		
}
