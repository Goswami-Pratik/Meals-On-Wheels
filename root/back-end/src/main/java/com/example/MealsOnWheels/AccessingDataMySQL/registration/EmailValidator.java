package com.example.MealsOnWheels.AccessingDataMySQL.registration;

import org.springframework.stereotype.Service;

import java.util.function.Predicate;
import java.util.regex.Pattern;

@Service
public class EmailValidator implements Predicate<String> {
    private static Predicate<String> IS_EMAIL_VALID =
        Pattern.compile(
                "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$",
                Pattern.CASE_INSENSITIVE
        ).asPredicate();

    @Override
    public boolean test(String email) {
        if(email == null || email.equals(""))
            throw new IllegalStateException("Email Cannot be null or empty.");
        return IS_EMAIL_VALID.test(email);
    }
}
