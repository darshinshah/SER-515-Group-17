package com.asu.group17.service;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asu.group17.model.Fixtures;
import com.asu.group17.model.Referee;
import com.asu.group17.repository.FixturesRepository;
import com.asu.group17.repository.RefereeRepository;

@RestController
public class RefereeController {
	
	@Autowired
	private RefereeRepository refereeRepository;
	
	@Autowired
	private FixturesRepository fixturesRepository;
	
	@CrossOrigin(origins = "*")
	@GetMapping("/getReferees")
	public List<Referee> getReferees() {
		return this.refereeRepository.findAll();
	}
	
	@CrossOrigin(origins = "*")
	@PostMapping("/registerReferee")
	public String saveReferee(@RequestBody Referee data) {
		
//		boolean flag = true;
//		if(flag) {
//			return "Registration is closed. Please try Next season. Thank you!";
//		}
		
		Iterable<Referee> userlist = refereeRepository.findAll();
		Iterator<Referee> it = userlist.iterator();
		while (it.hasNext()) {
			Referee refereeDetail = it.next();
			if (refereeDetail.getEmailId() != null && refereeDetail.getEmailId().equals(data.getEmailId()))
				return "Referee is already registered!";
		}
		this.refereeRepository.save(data);
		return "User registered";
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/getFixturesWithoutReferees")
	public List<Fixtures> getFixturesWithoutVolunteers() {
		return this.fixturesRepository.findAll();
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/assignRefereesAutomatically")
	public String assignRefereesAutomatically() {
		List<Fixtures> fixtures = this.fixturesRepository.findAll();
		this.fixturesRepository.deleteAll();
		List<Referee> referee = this.refereeRepository.findAll();
		for(int i=0;i<fixtures.size();i++) {
			int refereeVal = i % referee.size();
			String refereeName = referee.get(refereeVal).getName();
			Fixtures f = fixtures.get(i);
			f.setRefereeName(refereeName);
			this.fixturesRepository.save(f);
		}
		
		return "Assigned the Referees Randomly";
	}
	
	@CrossOrigin(origins = "*")
	@PostMapping("/saveFixturesWithoutReferees")
	public String saveReferee(@RequestBody Fixtures[] data) {
		Fixtures[] fixtures = data;
		this.fixturesRepository.deleteAll();
		for(int i=0;i<fixtures.length;i++) {
			this.fixturesRepository.save(fixtures[i]);
		}
		return "Saved Referees to Fixtures";
	}
	
	

}
