package com.example.MealsOnWheels.AccessingDataMySQL.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class TemplateController {

    @GetMapping(path = "login")
    public String getLoginView() {
        return "login";
    }

    @GetMapping(path = "menu")
    public String getMenuView() {
        return "menu";
    }
}
