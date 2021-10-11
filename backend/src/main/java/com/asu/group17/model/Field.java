package com.asu.group17.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "field")
public class Field {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int fieldid;
	
	private String fieldname;
	
	private Double latitude;
	
	private Double longitude;

	private String city;

	
	
	public Field() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Field(String fieldname, Double latitude, Double longitude, String city) {
		super();
//		this.fieldid = fieldid;
		this.fieldname = fieldname;
		this.latitude = latitude;
		this.longitude = longitude;
		this.city = city;
	}

	public int getFieldid() {
		return fieldid;
	}

	public void setFieldid(int fieldid) {
		this.fieldid = fieldid;
	}

	public String getFieldname() {
		return fieldname;
	}

	public void setFieldname(String fieldname) {
		this.fieldname = fieldname;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}
	
	

}
