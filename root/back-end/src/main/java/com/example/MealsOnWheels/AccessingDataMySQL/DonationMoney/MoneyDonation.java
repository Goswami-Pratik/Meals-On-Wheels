package com.example.MealsOnWheels.AccessingDataMySQL.DonationMoney;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "money")
public class MoneyDonation {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(name="id", nullable = false)
    private Long id;

    @NotNull(message = "Donate as cannot be null.")
    @Column(name="donateAS", nullable=false)
    private String donateAs;

    @NotNull(message = "Name on card cannot be null.")
    @Column(name="nameOnCard", nullable=false)
    private String nameOnCard;

    @NotNull(message = "Card Number cannot be null.")
    @Column(name="cardNumber", nullable=false)
    private String cardNumber;

    @NotNull(message = "Card Expiry Date cannot be null.")
    @Column(name="cardExpDate", nullable=false)
    private String cardExpDate;

    @NotNull(message = "Amount cannot be null.")
    @Column(name="amount", nullable=false)
    private String amount;

    public MoneyDonation(@NotNull(message = "Donate as cannot be null.") String donateAs,
                         @NotNull(message = "Name on card cannot be null.") String nameOnCard,
                         @NotNull(message = "Card Number cannot be null.") String cardNumber,
                         @NotNull(message = "Card Expiry Date cannot be null.") String cardExpDate,
                         @NotNull(message = "Amount cannot be null.") String amount) {
        this.donateAs = donateAs;
        this.nameOnCard = nameOnCard;
        this.cardNumber = cardNumber;
        this.cardExpDate = cardExpDate;
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "MoneyDonation{" +
                "id=" + id +
                ", donateAs='" + donateAs + '\'' +
                ", nameOnCard='" + nameOnCard + '\'' +
                ", cardNumber='" + cardNumber + '\'' +
                ", cardExpDate='" + cardExpDate + '\'' +
                ", amount='" + amount + '\'' +
                '}';
    }
}
