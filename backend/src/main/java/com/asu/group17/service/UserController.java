package com.asu.group17.service;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asu.group17.models.Login;
import com.asu.group17.models.Player;
import com.asu.group17.repository.PlayerRepository;
import com.asu.group17.repository.UserRepository;

@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private PlayerRepository playerRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/players")
	public List<Player> getPlayers(){
		return this.playerRepository.findAll();
	}
	
	@PostMapping("/post")
	public Player save(@RequestBody Player player) {
		return this.playerRepository.save(player);
	}
	
	@CrossOrigin(origins = "*")
	@PostMapping("/savelogin")
	public String saveUser(@RequestBody Login data) {
		Iterable<Login> userlist = userRepository.findAll();
		
		
		Iterator<Login> it = userlist.iterator();
		while(it.hasNext()) {
			Login logindetail = it.next();
			
			if(logindetail.getEmail() != null && logindetail.getEmail().equals(data.getEmail()))
				return "User is already present";
		}
		
		this.userRepository.save(data);
		return "User registered";
		
		
	}
	
	
 
	@CrossOrigin(origins = "*")
	@PostMapping("/login")
	public String getUser(@RequestBody Login data) {
		Iterable<Login> userlist = userRepository.findAll();
		
		Iterator<Login> it = userlist.iterator();
		while(it.hasNext()) {
			Login logindetail = it.next();
			if(logindetail.getEmail() != null && logindetail.getEmail().equals(data.getEmail()))
				return "User found";
		}
		
		
		return "User not found";
		
		
		
	}
	

}
