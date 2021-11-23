package com.asu.group17.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asu.group17.model.Teams;
import com.asu.group17.model.Volunteer;
import com.asu.group17.model.Field;
import com.asu.group17.model.Fixtures;
import com.asu.group17.model.Referee;
import com.asu.group17.repository.FieldRepository;
import com.asu.group17.repository.FixturesRepository;
import com.asu.group17.repository.RefereeRepository;
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

	@Autowired
	private RefereeRepository refereeRepository;
	
	
	
	
	public void createFixtures() {
		
		List<Teams> teams = teamsRepository.findAll();
		
		List<Field> venues = fieldRepository.findAll();
		
		List<Volunteer> volunteer = volunteerRepository.findAll();
		
		List<Referee> referee = refereeRepository.findAll();
		
		String dt = "2021-12-01";
		
		for(int i=0;i<teams.size();i++) {
			for(int j=i+1;j<teams.size();j++) {
				if(teams.get(i).getApplicationGroup().equals(teams.get(j).getApplicationGroup())) {
					
					int val = i % venues.size();
					String venueName = venues.get(val).getFieldname();
					
					int volunteerVal = i % volunteer.size();
					String vounteerName = volunteer.get(volunteerVal).getName();
					
					int refereeVal = i % referee.size();
					String refereeName = referee.get(refereeVal).getName();
					
					SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

					Calendar c = Calendar.getInstance();

					try {
						c.setTime(sdf.parse(dt));
					} catch (ParseException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
					if(i%2 ==0) {
						c.add(Calendar.DATE, 1);  // number of days to add

						dt = sdf.format(c.getTime());  // dt is now the new date
					}
					
					Fixtures f = new Fixtures(teams.get(i).getTeamName(), teams.get(j).getTeamName(), teams.get(i).getApplicationGroup(), venueName, vounteerName, refereeName, dt);
					
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
