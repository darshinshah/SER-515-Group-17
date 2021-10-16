
package com.asu.group17.model;

import javax.persistence.Column;
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
	int teamid;
	
	@Column(name = "name")
	String name;
	
	@Column(name = "country")
	String country;
	
	@Column(name = "mgid")
	int mgid;
	
	public int getTeamid() {
		return teamid;
	}
	public void setTeamid(int teamid) {
		this.teamid = teamid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	
	public int getMgid() {
		return mgid;
	}
	public void setMgid(int mgid) {
		this.mgid = mgid;
	}
	
	@Override
	public String toString() {
		return "Teams [teamid=" + teamid + ", name=" + name + ", country=" + country + ", mgid="
				+ mgid+ "]";
	}
	public Teams() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Teams(int teamid, String name, String country) {
		super();
		this.teamid = teamid;
		this.name = name;
		this.country = country;
		this.mgid = mgid;
	}
	
	

}
