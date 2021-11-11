package com.asu.group17.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Volunteer")
public class Volunteer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int voulnteerId;
	
	String name;
	
	String emailId;
	
	String phoneNumber;
	
	int age;
	
	String gender;
	
	String city;
	
	

	public Volunteer() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Volunteer(String name, String emailId, String phoneNumber, int age, String gender,
			String city) {
		super();
		this.name = name;
		this.emailId = emailId;
		this.phoneNumber = phoneNumber;
		this.age = age;
		this.gender = gender;
		this.city = city;
	}



	public int getVoulnteerId() {
		return voulnteerId;
	}



	public void setVoulnteerId(int voulnteerId) {
		this.voulnteerId = voulnteerId;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getEmailId() {
		return emailId;
	}



	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}



	public String getPhoneNumber() {
		return phoneNumber;
	}



	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}



	public int getAge() {
		return age;
	}



	public void setAge(int age) {
		this.age = age;
	}



	public String getGender() {
		return gender;
	}



	public void setGender(String gender) {
		this.gender = gender;
	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}
	
	
	

}