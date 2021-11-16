package com.asu.group17.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.asu.group17.model.Teams;
import com.asu.group17.repository.TeamsRepository;


@RestController
public class TeamsController {
	
	@Autowired
	public TeamsRepository teamsRepository;
	
	@CrossOrigin(origins = "*")
	@GetMapping(value = "/allTeams")
	public List <Teams>getAllTeams()
	{
		return teamsRepository.findAll();
	}
	
	@CrossOrigin(origins = "*")
	@PostMapping("/saveTeam")
	public String saveTeam(@RequestBody Teams data) {
		boolean flag = true;
		if(flag) {
			return "Registration is closed. Please try Next season. Thank you!";
		}
		this.teamsRepository.save(data);
		return "Team Registered";
	}
	

}
