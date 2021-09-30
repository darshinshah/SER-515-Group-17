package com.asu.group17.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TournamentDirector")
public class TournamentDirector {
//    CREATE TABLE TournamentDirector (
//	  tdid INTEGER UNSIGNED auto_increment NOT NULL,
//    firstname CHARACTER VARYING(128) NOT NULL,
//    lastname CHARACTER VARYING(128) NOT NULL,
//    emailId CHARACTER VARYING(128) NOT NULL,
//    age INTEGER NOT NULL, 
//    gender VARCHAR(23) NOT NULL,
//    PRIMARY KEY (tdid)
//)   ENGINE=INNODB auto_increment = 90000;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int tdid;
	
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
	
	public int getTdid() {
		return tdid;
	}

	public void setTdid(int tdid) {
		this.tdid = tdid;
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


	public TournamentDirector(int tdid, String firstname, String lastname, String emailId, int age, String gender) {
		super();
		this.tdid = tdid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.emailId = emailId;
		this.age = age;
		this.gender = gender;
}

}
