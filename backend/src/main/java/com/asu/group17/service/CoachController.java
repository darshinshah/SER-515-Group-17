package com.asu.group17.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.asu.group17.model.Coach;
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
	
	@GetMapping("/getCoachByUserName/{username}")
	 public Coach findUserById(@PathVariable(value = "username") String username) {
	     return coachRepository.findByEmailId(username);
	 }
	
	@CrossOrigin(origins = "*")
	@GetMapping(value = "/getRegisteredTeam")
	public List<Teams> getRegisteredTeamByCoach(@RequestParam  String username){
		List<Coach> allCoach = coachRepository.findAll();
		
		List<Teams> allTeams = teamsRepository.findAll();
		Map<Integer, Teams> mapTeamId = new HashMap<>();
		for(Teams team: allTeams) {
			mapTeamId.put(team.getTeamId(), team);
		}	
			
			
		List<Teams> allTeamsUnderCoach = new ArrayList<>();
		
		List<Integer> listOfTeam = new ArrayList<>();
		
		for(Coach coach: allCoach ) {
			if(coach.getEmailId().equalsIgnoreCase(username)) {
				listOfTeam.add(coach.getTeamid());
			}
		}
		
		for(Integer teamid: listOfTeam) {
			if(mapTeamId.containsKey(teamid)) {
				allTeamsUnderCoach.add(mapTeamId.get(teamid));
			}
			
		}
		
		return allTeamsUnderCoach;
 		
		
		
	}
	
	
	
	
}
	
	
 
