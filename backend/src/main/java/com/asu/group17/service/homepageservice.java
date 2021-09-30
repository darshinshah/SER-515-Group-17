package com.asu.group17.service;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class homepageservice {
	
	@GetMapping("/greeting")
	public String greetingApi() {
		return "Hii,  ASU";
	}

}
