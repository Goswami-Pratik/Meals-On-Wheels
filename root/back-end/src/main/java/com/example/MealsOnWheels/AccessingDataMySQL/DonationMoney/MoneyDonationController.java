package com.example.MealsOnWheels.AccessingDataMySQL.DonationMoney;

import com.example.MealsOnWheels.AccessingDataMySQL.DonationFood.CreateFormRequest;
import com.example.MealsOnWheels.AccessingDataMySQL.DonationFood.DonationFormModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/api/moneyDonation")
public class MoneyDonationController {

    @Autowired
    MoneyDonationRepository moneyDonationRepository;

    @PostMapping("/addDonation")
    public ResponseEntity<?> addNewMoneyDonation(@Valid @RequestBody MoneyDonationRequest moneyDonationRequest) {

        MoneyDonation moneyDonation = new MoneyDonation(moneyDonationRequest.getDonateAs(),
                moneyDonationRequest.getNameOnCard(), moneyDonationRequest.getCardNumber(),
                moneyDonationRequest.getCardExpDate(), moneyDonationRequest.getAmount());

        moneyDonationRepository.save(moneyDonation);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
