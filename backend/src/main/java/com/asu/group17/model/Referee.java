package com.asu.group17.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "Referee")
public class Referee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int refereeId;
	
	String name;
	
	String emailId;
	
	int age;
	
	String gender;
	
	int experience;
	
	String availability;
	
	public Referee() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Referee(String name, String emailId, int age, String gender, int experience, String availability) {
		super();
		this.name = name;
		this.emailId = emailId;
		this.age = age;
		this.gender = gender;
		this.experience = experience;
		this.availability = availability;
	}

	public int getRefereeId() {
		return refereeId;
	}

	public void setRefereeId(int refereeId) {
		this.refereeId = refereeId;
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

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}

	public String getAvailability() {
		return availability;
	}

	public void setAvailability(String availability) {
		this.availability = availability;
	}
	
}
