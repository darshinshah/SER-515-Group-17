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
	
	private String volunteerName;
	
	private String refereeName;
	
	private String date;
	
	private String time;
	
	private String victoriousTeam;
	
	private String losingTeam;

	
	public Fixtures() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Fixtures(
			String homeTeam, String awayTeam, String category, String venue, 
			String volunteerName, String refereeName, String date, String time,
			String victoriousTeam, String losingTeam) {
		super();
		this.homeTeam = homeTeam;
		this.awayTeam = awayTeam;
		this.category = category;
		this.venue = venue;
		this.volunteerName = volunteerName;
		this.refereeName = refereeName;
		this.date = date;
		this.time = time;
		this.victoriousTeam = victoriousTeam;
		this.losingTeam = losingTeam;
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


	public String getVolunteerName() {
		return volunteerName;
	}


	public void setVolunteerName(String volunteerName) {
		this.volunteerName = volunteerName;
	}


	public String getRefereeName() {
		return refereeName;
	}


	public void setRefereeName(String refereeName) {
		this.refereeName = refereeName;
	}


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}


	public String getTime() {
		return time;
	}


	public void setTime(String time) {
		this.time = time;
	}


	public String getVictoriousTeam() {
		return victoriousTeam;
	}


	public void setVictoriousTeam(String victoriousTeam) {
		this.victoriousTeam = victoriousTeam;
	}


	public String getLosingTeam() {
		return losingTeam;
	}


	public void setLosingTeam(String losingTeam) {
		this.losingTeam = losingTeam;
	}

}
