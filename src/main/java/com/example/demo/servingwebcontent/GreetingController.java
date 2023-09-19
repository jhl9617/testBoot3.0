package com.example.demo.servingwebcontent;


import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    @GetMapping("/greeting")
    public String greeting(@RequestParam(name="name", required=false, defaultValue="BoOot") String name, Model model) {
        model.addAttribute("name", name);
        return "greeting";
    }

    @GetMapping("/api/data")
    public String sendData() {
        return "Hello World from restAPI";
    }

}