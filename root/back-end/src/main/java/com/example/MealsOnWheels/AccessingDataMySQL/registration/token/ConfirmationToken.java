package com.example.MealsOnWheels.AccessingDataMySQL.registration.token;

import com.example.MealsOnWheels.AccessingDataMySQL.appuser.Users;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.ManyToAny;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class ConfirmationToken {

    @SequenceGenerator(
            name = "confirmation_token_sequence",
            sequenceName = "confirmation_token_sequence",
            allocationSize = 1
    )
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "confirmation_token_sequence"
    )
    @Column(name="id", nullable = false)
    private Long id;

    @NotNull(message = "Token cannot be null.")
    private String token;

    @Column(name="created_at", updatable = false, nullable = false)
    @NotNull(message = "Created_at cannot be null.")
    private LocalDateTime createdAt;

    @Column(name="expires_at", nullable = false)
    @NotNull(message = "Expires_at cannot be null.")
    private LocalDateTime expiresAt;

    @Column(name="confirmed_at")
    private LocalDateTime confirmedAt;

    @ManyToOne //fetch = FetchType.LAZY, cascade = CascadeType.ALL
    @JoinColumn(
        nullable = false,
        name = "user_id"
    )
    private Users users = null;

    public ConfirmationToken(@NotNull(message = "Token cannot be null.") String token,
                             @NotNull(message = "Created_at cannot be null.") LocalDateTime createdAt,
                             @NotNull(message = "Expires_at cannot be null.") LocalDateTime expiresAt,
                             Users users) {
        this.token = token;
        this.createdAt = createdAt;
        this.expiresAt = expiresAt;
        this.users = users;
    }
}
