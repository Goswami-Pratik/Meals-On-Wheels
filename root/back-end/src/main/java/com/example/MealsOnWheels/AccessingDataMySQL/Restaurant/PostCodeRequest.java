package com.example.MealsOnWheels.AccessingDataMySQL.Restaurant;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class PostCodeRequest {
    private final String pickUpPostCode;
    private final String deliveryPostCode;
}
