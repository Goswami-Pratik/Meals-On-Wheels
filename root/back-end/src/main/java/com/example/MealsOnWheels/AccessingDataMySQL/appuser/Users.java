package com.example.MealsOnWheels.AccessingDataMySQL.appuser;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@Entity
@Table(name = "users")
public class Users implements UserDetails {
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    @Column(name="id", nullable = false)
    private Long id;

    @NotNull(message = "First name cannot be null.") // For validating java beans in the JVM.
    @Column(name="first_name", nullable=false) // nullable to give indication to JPA.
    private String firstName;

    @NotNull(message = "Last name cannot be null.")
    @Column(name="last_name", nullable=false)
    private String lastName;

    @NotNull(message = "Date Of Birth cannot be null.")
    @Column(name="dob", nullable=false)
    @Temporal(TemporalType.DATE)
    private Date dateOfBirth;  // Ref: https://stackoverflow.com/questions/25333711/what-is-the-use-of-the-temporal-annotation-in-hibernate

    @NotNull(message = "Email cannot be null.")
    @Email(message = "Invalid Email Address.")
    @Column(name = "email", nullable = false)
    private String email;

    @NotNull(message = "Password cannot be null.")
    @Column(name = "password", nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name="user_role")
    @NotNull
    private UserRoles userRole;

    @NotNull(message = "Address cannot be null")
    @Column(name = "address")
    private String address;

    @Column(name = "phone", columnDefinition = "TEXT")
    private String phoneNumber;

    @Column(name="allergy", columnDefinition = "TEXT")
    private String allergy;

    @NotNull(message = "Account Verified cannot be null")
    @Column(name = "verified", nullable = false)
    private Boolean accountVerified = false;

    @Column(name="account_locked")
    @NotNull
    private Boolean accountLocked = false;

    @UpdateTimestamp
    @Column(name="created_at", updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    @UpdateTimestamp
    @Column(name="updated_at")
    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    private Date updated_at;

    public Users(@NotNull(message = "First name cannot be null.") String firstName,
                 String lastName,
                 @NotNull(message = "Date Of Birth cannot be null.") Date dateOfBirth,
                 @NotNull(message = "Address cannot be null.") String address,
                 @NotNull(message = "Email cannot be null.")
                 @Email(message = "Invalid Email Address.") String email,
                 @NotNull(message = "Password cannot be null.") String password,
                 @NotNull UserRoles userRole, String phoneNumber,
                 String allergy) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.email = email;
        this.password = password;
        this.userRole = userRole;
        this.phoneNumber = phoneNumber;
        this.allergy = allergy;
    }

    @Override
    public String toString() {
        return "Users{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", userRole=" + userRole +
                ", address='" + address + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", allergy='" + allergy + '\'' +
                ", accountVerified=" + accountVerified +
                ", accountLocked=" + accountLocked +
                ", createdAt=" + createdAt +
                ", updated_at=" + updated_at +
                '}';
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        //SimpleGrantedAuthority authority = new SimpleGrantedAuthority(userRole.name());
        return userRole.getGrantedAuthorities();
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !accountLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return accountVerified;
    }


}
