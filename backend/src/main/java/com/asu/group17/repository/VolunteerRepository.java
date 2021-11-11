package com.asu.group17.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.asu.group17.model.Volunteer;

public interface VolunteerRepository extends JpaRepository<Volunteer, Integer>{

}