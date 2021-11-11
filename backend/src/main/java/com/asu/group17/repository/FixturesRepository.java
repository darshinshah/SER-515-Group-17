package com.asu.group17.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.asu.group17.model.Fixtures;

@Repository
public interface FixturesRepository  extends JpaRepository<Fixtures, Integer> {
	

}
