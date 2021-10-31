package com.asu.group17.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asu.group17.model.Teams;
import com.asu.group17.repository.CoachRepository;
import com.asu.group17.repository.TeamsRepository;

@RestController
@RequestMapping("/v1")
public class CoachController {
	@Autowired
	public TeamsRepository teamsRepository;
	@Autowired
	public CoachRepository coachRepository;
	
//	@CrossOrigin(origins = "*")
////	@GetMapping("/getCoachByUserName/{username}")
////	 public Teams findUserById(@PathVariable(value = "username") String username) {
////	     return teamsRepository.findByEmail(username);
////	 }
	
	
	
}
	
	
 
