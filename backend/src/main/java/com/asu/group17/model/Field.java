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
	private int fieldId;
	
	private String fieldName;
	
	private Double latitude;
	
	private Double longitude;

	private String city;
	
	private String image;

	
	
	public Field() {
		super();
	}

	public Field(String fieldname, Double latitude, Double longitude, String city, String image) {
		super();
		this.fieldName = fieldname;
		this.latitude = latitude;
		this.longitude = longitude;
		this.city = city;
		this.image = image;
	}

	public int getFieldid() {
		return fieldId;
	}

	public void setFieldid(int fieldid) {
		this.fieldId = fieldid;
	}

	public String getFieldname() {
		return fieldName;
	}

	public void setFieldname(String fieldname) {
		this.fieldName = fieldname;
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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	
	
	

}
