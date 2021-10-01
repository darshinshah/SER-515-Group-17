package com.asu.group17.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asu.group17.model.Player;
import com.asu.group17.repository.PlayerRepository;

@RestController
@RequestMapping("/v1")
public class MainController {
	
	@Autowired
	PlayerRepository playerRepository;
	
	@GetMapping("/greeting")
	public String greetingApi() {
		return "Hii,  ASU";
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/players")
	public List<Player> getPlayers(){
		return this.playerRepository.findAll();
	}
	
	
	
	

}
