package com.example.MealsOnWheels.AccessingDataMySQL.appuser;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/users")
public class UserController {

    private final UserServices userServices;

    @Autowired
    public UserController(UserServices userServices) {
        this.userServices = userServices;
    }

    @GetMapping
    public Users getMyUserInfo() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Object userEmail = auth.getPrincipal();
//        System.out.println("getMyUserInfo Triggered.\n" + userEmail.toString());
        return (Users) userServices.loadUserByUsername(userEmail.toString());
    }

    @PutMapping(path = "/updateInfo")
    public Users updateUserInfo(@Valid @RequestBody UserUpdateRequest userUpdateRequest) {
        return userServices.updateUserInfo(userUpdateRequest);
    }

    //TODO add missing mappings for user model controller.
}
