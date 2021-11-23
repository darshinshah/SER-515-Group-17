package com.asu.group17.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
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
		
		for(int i=0;i<teams.size();i++) {
			for(int j=0;j<teams.size();j++) {
				if(i!=j) {
					if(teams.get(i).getApplicationGroup().equals(teams.get(j).getApplicationGroup())) {
						
						int val = j % venues.size();
						String venueName = venues.get(val).getFieldname();
						
						int volunteerVal = j % volunteer.size();
						String vounteerName = volunteer.get(volunteerVal).getName();
						
						int refereeVal = j % referee.size();
						String refereeName = referee.get(refereeVal).getName();
						Fixtures f = new Fixtures(teams.get(i).getTeamName(), teams.get(j).getTeamName(), teams.get(i).getApplicationGroup(), venueName, vounteerName, refereeName, null, null);
						
						this.fixturesRepository.save(f);
					}
					
				}
									
			}
		}
		generateDateandTime();		
	}
	
	public void generateDateandTime() {
		
		List<Fixtures> fixtures = this.fixturesRepository.findAll();
		Collections.shuffle(fixtures);
		int size = fixtures.size();
		int flag =0;
		String dt = "2021-12-02";
		String[] ti = {"3:00 PM", "7:00 PM"};
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Calendar c = Calendar.getInstance();
		for(int i =0;i<size;i++) {
			try {
				c.setTime(sdf.parse(dt));
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}			
			
			if(flag == 0 || flag == 2 || flag == 4) {
				c.add(Calendar.DATE, 1);
				dt = sdf.format(c.getTime());
				flag++;
				String time = ti[i % 2];
				Fixtures fi = fixtures.get(i);
				fi.setDate(dt);
				fi.setTime(time);
			}else if(flag == 1 || flag == 3 || flag == 5) {
				flag++;
				String time = ti[i % 2];
				Fixtures fi = fixtures.get(i);
				fi.setDate(dt);
				fi.setTime(time);
					
			}else if(flag == 6) {
				flag = 0;
				c.add(Calendar.DATE, 4);
				dt = sdf.format(c.getTime());					
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
