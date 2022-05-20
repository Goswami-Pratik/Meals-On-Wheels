package com.example.MealsOnWheels.AccessingDataMySQL.DonationFood;


import lombok.Getter;

import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@Table(name = "DonationForm")
public class CreateFormRequest {
    @NotBlank
    @Size(max = 20)
    private String itemName = "";

    @NotBlank
    @Size(max = 20)
    private String expiryDate= "";

    @NotBlank
    @Size(max = 11)
    private String dateOfDonation= "";

    @Size(max = 20)
    private String companyName= "";

    @NotBlank
    @Size(max = 20)
    private String itemType= "";



}
