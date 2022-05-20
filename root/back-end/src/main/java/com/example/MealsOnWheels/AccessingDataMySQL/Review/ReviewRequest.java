package com.example.MealsOnWheels.AccessingDataMySQL.Review;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class ReviewRequest {
    private final String name;
    private final String description;
}
