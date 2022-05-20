package com.example.MealsOnWheels.AccessingDataMySQL.registration;

import lombok.*;

import javax.persistence.Entity;
import java.util.Date;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationRequest {
    private final String firstName;
    private final String lastName;
    private Date dateOfBirth;
    private final String email;
    private final String password;
    private final String address;
    private final String phone;
    private final String allergy;
}
