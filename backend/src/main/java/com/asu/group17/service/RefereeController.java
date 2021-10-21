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

import com.asu.group17.model.Referee;
import com.asu.group17.repository.RefereeRepository;

@RestController
@RequestMapping("/v1")
public class RefereeController {
	
	@Autowired
	private RefereeRepository refereeRepository;
	
	@CrossOrigin(origins = "*")
	@GetMapping("/getReferees")
	public List<Referee> getReferees() {
		return this.refereeRepository.findAll();
	}
	
	@CrossOrigin(origins = "*")
	@PostMapping("/registerReferee")
	public String saveReferee(@RequestBody Referee data) {
		Iterable<Referee> userlist = refereeRepository.findAll();
		Iterator<Referee> it = userlist.iterator();
		while (it.hasNext()) {
			Referee refereeDetail = it.next();
			if (refereeDetail.getEmailId() != null && refereeDetail.getEmailId().equals(data.getEmailId()))
				return "Referee is already registered!";
		}
		this.refereeRepository.save(data);
		return "User registered ";
	}
	
	

}
