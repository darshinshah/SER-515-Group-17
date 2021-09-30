package com.asu.group17.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.asu.group17.models.Login;

@Repository
public interface UserRepository extends JpaRepository<Login, String>{
	

}
