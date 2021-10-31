package com.asu.group17.service;

import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asu.group17.model.Login;
import com.asu.group17.repository.UserRepository;

@RestController
@RequestMapping("/v1")
public class LoginController {

	@Autowired
	private UserRepository userRepository;

	@CrossOrigin(origins = "*")
	@PostMapping("/signup")
	public String saveUser(@RequestBody Login data) {
		Iterable<Login> userlist = userRepository.findAll();
		Iterator<Login> it = userlist.iterator();
		while (it.hasNext()) {
			Login logindetail = it.next();
			if (logindetail.getEmail() != null && logindetail.getEmail().equals(data.getEmail()))
				return "User is already registered! Please try sign in!";
		}
		this.userRepository.save(data);
		return "User registered";
	}

	@CrossOrigin(origins = "*")
	@PostMapping("/login")
	public String getUser(@RequestBody Login data) {
		Iterable<Login> userlist = userRepository.findAll();

		Iterator<Login> it = userlist.iterator();
		while (it.hasNext()) {
			Login logindetail = it.next();
			if (logindetail.getEmail() != null && logindetail.getEmail().equals(data.getEmail()))
				return "User logged in";
		}

		return "User not regsitered";

	}

}
