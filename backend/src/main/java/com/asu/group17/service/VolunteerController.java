package com.asu.group17.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.asu.group17.model.Fixtures;
import com.asu.group17.model.Volunteer;
import com.asu.group17.repository.FixturesRepository;
import com.asu.group17.repository.VolunteerRepository;

@RestController
public class VolunteerController {
	
	@Autowired
	public VolunteerRepository volunteerRepository;
	
	@Autowired
	private FixturesRepository fixturesRepository;
	
	
	@CrossOrigin(origins = "*")
	@GetMapping(value = "/allVolunteers")
	public List <Volunteer>getAllVolunteers()
	{
		return volunteerRepository.findAll();
	}
	
	
	@CrossOrigin(origins = "*")
	@PostMapping("/saveVolunteer")
	public String saveVolunteer(@RequestBody Volunteer data) {
//		boolean flag = true;
//		if(flag) {
//			return "Registration is closed. Please try Next season. Thank you!";
//		}
		this.volunteerRepository.save(data);
		return "Volunteer Registered";
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/getFixturesWithoutVolunteers")
	public List<Fixtures> getFixturesWithoutVolunteers() {
		return this.fixturesRepository.findAll();
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/assignVolunteersAutomatically")
	public String assignVolunteersAutomatically() {
		List<Fixtures> fixtures = this.fixturesRepository.findAll();
		this.fixturesRepository.deleteAll();
		List<Volunteer> volunteer = volunteerRepository.findAll();
		for(int i=0;i<fixtures.size();i++) {
			int volunteerVal = i % volunteer.size();
			String vounteerName = volunteer.get(volunteerVal).getName();
			Fixtures f = fixtures.get(i);
			f.setVolunteerName(vounteerName);
			this.fixturesRepository.save(f);
		}
		
		return "Assigned the Volunteers Randomly";
	}
	
	@CrossOrigin(origins = "*")
	@PostMapping("/saveFixturesWithoutVolunteers")
	public String saveVolunteer(@RequestBody Fixtures[] data) {
		Fixtures[] fixtures = data;
		this.fixturesRepository.deleteAll();
		for(int i=0;i<fixtures.length;i++) {
			this.fixturesRepository.save(fixtures[i]);
		}
		return "Saved Volunteers to Fixtures";
	}
	


}