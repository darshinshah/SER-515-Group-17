package com.asu.group17.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asu.group17.model.Field;
import com.asu.group17.model.Fixtures;
import com.asu.group17.repository.FieldRepository;
import com.asu.group17.repository.FixturesRepository;

@RestController
@RequestMapping("/v1")
public class FieldController {
	
	@Autowired
	private FieldRepository fieldRepository;
	
	@Autowired
	private FixturesRepository fixturesRepository;
	
	
	@CrossOrigin(origins = "*")
	@GetMapping("/fields")
	public List<Field> getFields() {
		return this.fieldRepository.findAll();
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/getFixturesForFields")
	public List<Fixtures> getFixturesForFields() {
		return this.fixturesRepository.findAll();
	}
	
	

}
