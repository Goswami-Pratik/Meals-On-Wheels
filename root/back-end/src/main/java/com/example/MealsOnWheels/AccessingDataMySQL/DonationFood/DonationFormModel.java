package com.example.MealsOnWheels.AccessingDataMySQL.DonationFood;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "ingredients")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DonationFormModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 20)
    private String itemName;

    @NotBlank
    @Size(max = 20)
    private String itemType;

    @NotBlank
    @Size(max = 20)
    private String expiryDate;

    @NotBlank
    @Size(max = 11)
    private String dateOfDonation;

    @Size(max = 20)
    private String companyName;

    public DonationFormModel(String itemName, String itemType, String expiryDate, String dateOfDonation, String companyName){
        this.itemName = itemName;
        this.expiryDate = expiryDate;
        this.dateOfDonation = dateOfDonation;
        this.companyName = companyName;
        this.itemType = itemType;
    }

//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(
//            name = "id",
//            referencedColumnName = "id"
//    )
}
