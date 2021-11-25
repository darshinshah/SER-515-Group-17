package com.asu.group17.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asu.group17.model.Teams;
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
	
	public List<Fixtures> listOfFixtures =  new ArrayList<Fixtures>();
	
	
	
	
	public void createFixtures() {
		
		List<Teams> teams = teamsRepository.findAll();
		
		List<Field> venues = fieldRepository.findAll();
				
		List<Referee> referee = refereeRepository.findAll();
		
		for(int i=0;i<teams.size();i++) {
			for(int j=0;j<teams.size();j++) {
				if(i!=j) {
					if(teams.get(i).getApplicationGroup().equals(teams.get(j).getApplicationGroup())) {
						
						int val = j % venues.size();
						String venueName = venues.get(val).getFieldname();
						
						int refereeVal = j % referee.size();
						String refereeName = referee.get(refereeVal).getName();
						Fixtures f = new Fixtures(teams.get(i).getTeamName(), teams.get(j).getTeamName(), teams.get(i).getApplicationGroup(),
//													venueName, vounteerName, refereeName, null, null, null, null);
												venueName, "", refereeName, null, null, null, null);
						
//						this.fixturesRepository.save(f);
						this.listOfFixtures.add(f);
					}
					
				}
									
			}
		}
		generateDateandTime();		
	}
	
	public void generateDateandTime() {
		
//		List<Fixtures> fixtures = this.fixturesRepository.findAll();
		List<Fixtures> fixtures = this.listOfFixtures;
		Collections.shuffle(fixtures);
		int size = fixtures.size();
		int flag =0;
		String dt = "2021-12-02";
		String[] ti = {"3:00 PM", "7:00 PM"};
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Calendar c = Calendar.getInstance();
		for(int i =0;i<size;i++) {
			Fixtures p = fixtures.get(i);
			String[] match = {p.getHomeTeam(), p.getAwayTeam()};
			int val = (int)Math.round(Math.random());
			String winningTeam = match[val];
			String losingTeam = match[Math.abs(val-1)];
			p.setVictoriousTeam(winningTeam);
			p.setLosingTeam(losingTeam);
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
				this.fixturesRepository.save(fixtures.get(i));
			}else if(flag == 1 || flag == 3 || flag == 5) {
				flag++;
				String time = ti[i % 2];
				Fixtures fi = fixtures.get(i);
				fi.setDate(dt);
				fi.setTime(time);
				this.fixturesRepository.save(fixtures.get(i));
			}else if(flag == 6) {
				flag = 0;
				c.add(Calendar.DATE, 4);
				dt = sdf.format(c.getTime());
				i--;
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
		
	
	@CrossOrigin(origins = "*")
	@GetMapping("/getStandings")
	public HashMap<String,Integer[]> getStandings() {
//		this.fixturesRepository.deleteAll();
//		createFixtures();
		List<Fixtures> fixtures = this.fixturesRepository.findAll();
		HashMap<String, Integer[]> winningMap = new HashMap<>();
		for(int i =0;i<fixtures.size();i++) {
			
			if(winningMap.containsKey(fixtures.get(i).getVictoriousTeam())) {
				Integer[] arr = winningMap.get(fixtures.get(i).getVictoriousTeam());
				arr[0] +=1;
				winningMap.put(fixtures.get(i).getVictoriousTeam(), arr);
			}else {
				Integer[] arr = {0,0};
				arr[0] +=1;
				winningMap.put(fixtures.get(i).getVictoriousTeam(), arr);
			}
		}
		
		for(int i =0;i<fixtures.size();i++) {
			
			if(winningMap.containsKey(fixtures.get(i).getLosingTeam())) {
				Integer[] arr = winningMap.get(fixtures.get(i).getLosingTeam());
				arr[1] +=1;
				winningMap.put(fixtures.get(i).getLosingTeam(), arr);
			}else {
				Integer[] arr = {0,0};
				arr[1] +=1;
				winningMap.put(fixtures.get(i).getLosingTeam(), arr);
			}
		}
		
		return sortByValue(winningMap);
	}
	
	public HashMap<String, Integer[]> sortByValue(HashMap<String, Integer[]> hm)
    {
        List<Map.Entry<String, Integer[]> > list= new LinkedList<Map.Entry<String, Integer[]> >(hm.entrySet());
 
        Collections.sort(
            list,
            (i1,
             i2) -> i2.getValue()[0].compareTo(i1.getValue()[0]));
 
        HashMap<String, Integer[]> temp = new LinkedHashMap<String, Integer[]>();
        for (Map.Entry<String, Integer[]> aa : list) {
        	Integer[] arr = {aa.getValue()[0], aa.getValue()[1]};
            temp.put(aa.getKey(), arr);
        }
        return temp;
    }
	
	

}
