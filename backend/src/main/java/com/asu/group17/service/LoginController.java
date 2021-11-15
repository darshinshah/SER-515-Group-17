package com.asu.group17.service;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asu.group17.model.Login;
import com.asu.group17.model.Player;
import com.asu.group17.model.Teams;
import com.asu.group17.repository.UserRepository;
import com.asu.group17.repository.TeamsRepository;


@RestController
@RequestMapping("/v1")
public class LoginController {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private TeamsRepository teamsRepository;
	

	@CrossOrigin(origins = "*")
	@PostMapping("/signup")
	public String saveUser(@RequestBody Login data) {
		Iterable<Login> userlist = userRepository.findAll();
		Iterator<Login> it = userlist.iterator();
		while (it.hasNext()) {
			Login logindetail = it.next();
			if (logindetail.getEmail() != null && logindetail.getEmail().equals(data.getEmail()))
				return "User is already registered! Please try sign in!";
		}
		this.userRepository.save(data);
		return "User registered";
	}

	@CrossOrigin(origins = "*")
	@PostMapping("/Tournament_Manager")
	public String getUser(@RequestBody Login data) {
		Iterable<Login> userlist = userRepository.findAll();

		Iterator<Login> it = userlist.iterator();
		while (it.hasNext()) {
			Login logindetail = it.next();
			if (logindetail.getEmail() != null && logindetail.getEmail().equals(data.getEmail()))
				return "User logged in";
		}

		return "User not registered";

	}
	
	public Teams data1;
	public 	boolean flag = false;

	
	@CrossOrigin(origins = "*")
	@PostMapping("/Coach")
	public Teams getNewUser(@RequestBody Login data) {
		Iterable<Teams> teamsList = teamsRepository.findAll();

		Iterator<Teams> it = teamsList.iterator();
		while (it.hasNext()) {
			Teams detail = it.next();
			if (detail.getEmail().equals(data.getEmail())) {
				data1 = detail;
				flag = true;
				return detail;
			}		
		}
		flag = false;
		
		Teams t = new Teams();
		return t;
	}
	
	
	@CrossOrigin(origins = "*")
	@GetMapping("/getCoach")
    public Teams getTeam() {
		if(flag) {
			return data1;
		}else {
			return new Teams();
		}
       
    }
	
	@CrossOrigin(origins = "*")
	@PostMapping("/Volunteer_Manager")
	public String getVolunteerManager(@RequestBody Login data) {
		Iterable<Login> userlist = userRepository.findAll();

		Iterator<Login> it = userlist.iterator();
		while (it.hasNext()) {
			Login logindetail = it.next();
			if (logindetail.getEmail() != null && logindetail.getEmail().equals(data.getEmail()))
				return "User logged in";
		}

		return "User not registered";

	}
	
	@CrossOrigin(origins = "*")
	@PostMapping("/Referee_Manager")
	public String getRefereeManager(@RequestBody Login data) {
		Iterable<Login> userlist = userRepository.findAll();

		Iterator<Login> it = userlist.iterator();
		while (it.hasNext()) {
			Login logindetail = it.next();
			if (logindetail.getEmail() != null && logindetail.getEmail().equals(data.getEmail()))
				return "User logged in";
		}

		return "User not registered";

	}
	
	
	 
	
	

}
