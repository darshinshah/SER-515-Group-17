package com.asu.group17.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.asu.group17.model.Coach;

@Repository
public interface CoachRepository extends JpaRepository<Coach, Integer>{


}
