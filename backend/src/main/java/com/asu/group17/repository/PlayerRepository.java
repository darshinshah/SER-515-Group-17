package com.asu.group17.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.asu.group17.model.Player;

@Repository
public interface PlayerRepository  extends JpaRepository<Player, Integer>{
	
	List<Player> findByteamid(int id);
}
