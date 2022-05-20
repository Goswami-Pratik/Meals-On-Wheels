package com.example.MealsOnWheels.AccessingDataMySQL.registration.token;

import com.example.MealsOnWheels.AccessingDataMySQL.appuser.Users;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ConfirmationTokenService {
    private final ConfirmationTokenRepository confirmationTokenRepository;

    public void saveConfirmationToken(ConfirmationToken confirmationToken) {
        confirmationTokenRepository.save(confirmationToken);
    }

    public Optional<ConfirmationToken> getToken(String token) {
        return confirmationTokenRepository.findByToken(token);
    }

    public int setConfirmedAt(String token) {
        return confirmationTokenRepository.updateConfirmedAt(token, LocalDateTime.now());
    }

    public boolean checkIfValidTokenExist(Users users) {
        int totalValidTokens = confirmationTokenRepository.validTokenExistByUserID(users, LocalDateTime.now());
        return (totalValidTokens > 0);
    }
}
