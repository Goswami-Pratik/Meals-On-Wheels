package com.example.MealsOnWheels.AccessingDataMySQL.DonationFood;

//import mow.group10.Request.CreateFormRequest;
//import mow.group10.models.*;
//import mow.group10.payload.request.LoginRequest;
//import mow.group10.repository.DonationFormRepository;
//import mow.group10.repository.RoleRepository;
//import mow.group10.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

//import mow.group10.models.User;
import com.example.MealsOnWheels.AccessingDataMySQL.DonationFood.DonationFormModel;

//import mow.group10.models.ImageModel;
import javax.validation.Valid;

@RestController
@RequestMapping("/api/donation")
public class DonationFormController {

    @Autowired
    DonationFormRepository donationRepository;

    @PostMapping("/createForm")
    public ResponseEntity<?> authenticateForm(@Valid @RequestBody CreateFormRequest donModel) {

        DonationFormModel form = new DonationFormModel(donModel.getItemName(),
                donModel.getItemType(), donModel.getExpiryDate(),
                donModel.getDateOfDonation(), donModel.getCompanyName());

        donationRepository.save(form);
        return new ResponseEntity<>("form saved", HttpStatus.OK);


    }
}
