package com.example.MealsOnWheels.AccessingDataMySQL.DonationMoney;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class MoneyDonationRequest {
    @NotBlank
    @Size(min = 3, max = 20)
    private String donateAs;

    @NotBlank
    @Size(min = 3, max = 20)
    private String nameOnCard;

    @NotBlank
    @Size(min = 16, max = 19)
    private String cardNumber;

    @NotBlank
    private String cardExpDate;

    @NotBlank
    private String amount;
}
