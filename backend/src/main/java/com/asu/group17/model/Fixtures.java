package com.asu.group17.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "fixtures")
public class Fixtures {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long matchId;
	
	private String homeTeam;
	
	private String awayTeam;
	
	private String category;
	
	private String venue;

	
	public Fixtures() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Fixtures(String homeTeam, String awayTeam, String category, String venue) {
		super();
		this.homeTeam = homeTeam;
		this.awayTeam = awayTeam;
		this.category = category;
		this.venue = venue;
	}


	public long getMatchId() {
		return matchId;
	}


	public void setMatchId(long matchId) {
		this.matchId = matchId;
	}


	public String getHomeTeam() {
		return homeTeam;
	}


	public void setHomeTeam(String homeTeam) {
		this.homeTeam = homeTeam;
	}


	public String getAwayTeam() {
		return awayTeam;
	}


	public void setAwayTeam(String awayTeam) {
		this.awayTeam = awayTeam;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public String getVenue() {
		return venue;
	}


	public void setVenue(String venue) {
		this.venue = venue;
	}

}