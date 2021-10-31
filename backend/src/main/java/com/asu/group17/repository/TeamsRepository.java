package com.asu.group17.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.asu.group17.model.Teams;

@Repository
public interface TeamsRepository extends JpaRepository<Teams, Integer>{

	Teams findByEmail(String username);

}