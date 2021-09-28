package com.asu.group17.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asu.group17.models.Player;
import com.asu.group17.repository.PlayerRepository;

@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private PlayerRepository playerRepository;
	
	@GetMapping("/players")
	public List<Player> getPlayers(){
		return this.playerRepository.findAll();
	}
	
	@PostMapping("/post")
	public Player save(@RequestBody Player player) {
		return this.playerRepository.save(player);
	}
	
	

}
