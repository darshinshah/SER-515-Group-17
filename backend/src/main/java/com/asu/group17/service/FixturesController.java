package com.asu.group17.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asu.group17.model.Teams;
import com.asu.group17.model.Volunteer;
import com.asu.group17.model.Field;
import com.asu.group17.model.Fixtures;
import com.asu.group17.repository.FieldRepository;
import com.asu.group17.repository.FixturesRepository;
import com.asu.group17.repository.TeamsRepository;
import com.asu.group17.repository.VolunteerRepository;


@RestController
public class FixturesController {
	
	@Autowired
	private FixturesRepository fixturesRepository;
	
	@Autowired
	private TeamsRepository teamsRepository;
	
	@Autowired
	private FieldRepository fieldRepository;
	
	@Autowired
	private VolunteerRepository volunteerRepository;
	
	
	public void createFixtures() {
		
		List<Teams> teams = teamsRepository.findAll();
		
		List<Field> venues = fieldRepository.findAll();
		
		List<Volunteer> volunteer = volunteerRepository.findAll();
		
		
		
		for(int i=0;i<teams.size();i++) {
			for(int j=i+1;j<teams.size();j++) {
				if(teams.get(i).getApplicationGroup().equals(teams.get(j).getApplicationGroup())) {
					
					int val = i % venues.size();
					String venueName = venues.get(val).getFieldname();
					
					int volunteerVal = i % volunteer.size();
					String vounteerName = volunteer.get(volunteerVal).getName();
					
					
					
					Fixtures f = new Fixtures(teams.get(i).getTeamName(), teams.get(j).getTeamName(), teams.get(i).getApplicationGroup(), venueName, vounteerName);
					
					this.fixturesRepository.save(f);
				}					
			}
		}
		
	}
	


	@CrossOrigin(origins = "*")
	@GetMapping("/getFixtures")
	public List<Fixtures> getFixtures() {
		this.fixturesRepository.deleteAll();
		createFixtures();
		return this.fixturesRepository.findAll();
	}
	

}
