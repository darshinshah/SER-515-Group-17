
package com.asu.group17.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Teams")

public class Teams {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int teamId;
	
	String applicationGroup;
	
	String teamName;
	
	String teamGender;
	
	String coachName;
	
	String association;
	
	String contactName;
	
	String phoneNumber;
	
	String email;

	public Teams( String applicationGroup, String teamName, String teamGender, String coachName,
			String association, String contactName, String phoneNumber, String email) {
		super();
		this.applicationGroup = applicationGroup;
		this.teamName = teamName;
		this.teamGender = teamGender;
		this.coachName = coachName;
		this.association = association;
		this.contactName = contactName;
		this.phoneNumber = phoneNumber;
		this.email = email;
	}

	public Teams() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getTeamId() {
		return teamId;
	}

	public void setTeamId(int teamId) {
		this.teamId = teamId;
	}

	public String getApplicationGroup() {
		return applicationGroup;
	}

	public void setApplicationGroup(String applicationGroup) {
		this.applicationGroup = applicationGroup;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public String getTeamGender() {
		return teamGender;
	}

	public void setTeamGender(String teamGender) {
		this.teamGender = teamGender;
	}

	public String getCoachName() {
		return coachName;
	}

	public void setCoachName(String coachName) {
		this.coachName = coachName;
	}

	public String getAssociation() {
		return association;
	}

	public void setAssociation(String association) {
		this.association = association;
	}

	public String getContactName() {
		return contactName;
	}

	public void setContactName(String contactName) {
		this.contactName = contactName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
