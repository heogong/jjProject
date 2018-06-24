package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


@RestController
public class GreetingController {

	@RequestMapping("/greeting")
	public void greeting(Model model) {
		System.out.println("greetinggreetinggreetinggreetinggreetinggreeting");
		System.out.println("greetinggreetinggreetinggreetinggreetinggreeting");
		System.out.println("greetinggreetinggreetinggreetinggreetinggreeting");
		System.out.println("greetinggreetinggreetinggreetinggreetinggreeting");

		ModelAndView modelAndView = new ModelAndView();
		
		modelAndView.setViewName("/index");

		//return modelAndView;
	}
}