package com.asu.group17.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "coach")
public class Coach {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long coachid;
	
	@Column(name = "firstname")
	String firstname;
	
	@Column(name = "lastname")
	String lastname;
	
	@Column(name = "emailId")
	String emailId;
	
	@Column(name = "age")
	int age;
	
	@Column(name = "gender")
	String gender;
	
	@Column(name = "teamid")
	int teamid;
	
	@Column(name = "location")
	String location;
	
	@Column(name="levelofexp")
	int levelofexp; 
	
	@Column(name="coachmgrid")
	int coachmgrid;

	public Coach(long coachid, String firstname, String lastname, String emailId, int age, String gender, int teamid,
			String location, int levelofexp, int coachmgrid) {
		super();
		this.coachid = coachid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.emailId = emailId;
		this.age = age;
		this.gender = gender;
		this.teamid = teamid;
		this.location = location;
		this.levelofexp = levelofexp;
		this.coachmgrid = coachmgrid;
	}

	public long getCoachid() {
		return coachid;
	}

	public void setCoachid(long coachid) {
		this.coachid = coachid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
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

	public int getTeamid() {
		return teamid;
	}

	public void setTeamid(int teamid) {
		this.teamid = teamid;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public int getLevelofexp() {
		return levelofexp;
	}

	public void setLevelofexp(int levelofexp) {
		this.levelofexp = levelofexp;
	}

	public int getCoachmgrid() {
		return coachmgrid;
	}

	public void setCoachmgrid(int coachmgrid) {
		this.coachmgrid = coachmgrid;
	}
	
	
	
	
	
	

}
