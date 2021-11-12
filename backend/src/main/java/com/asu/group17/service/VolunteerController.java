package com.asu.group17.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.asu.group17.model.Volunteer;
import com.asu.group17.repository.VolunteerRepository;

@RestController
public class VolunteerController {
	
	@Autowired
	public VolunteerRepository volunteerRepository;
	
	
	@CrossOrigin(origins = "*")
	@GetMapping(value = "/allVolunteers")
	public List <Volunteer>getAllVolunteers()
	{
		return volunteerRepository.findAll();
	}
	
	
	@CrossOrigin(origins = "*")
	@PostMapping("/saveVolunteer")
	public String saveVolunteer(@RequestBody Volunteer data) {
		this.volunteerRepository.save(data);
		return "Volunteer Registered";
	}

}