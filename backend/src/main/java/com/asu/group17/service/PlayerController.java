package com.asu.group17.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asu.group17.model.Player;
import com.asu.group17.repository.PlayerRepository;


@RestController
public class PlayerController {
	
	@Autowired
	public PlayerRepository playerRepository;
	
	@GetMapping(value = "/allplayers")
	public List <Player> getAllPlayers()
	{
		return playerRepository.findAll();
	}
	
	

}
