package com.example.MealsOnWheels.AccessingDataMySQL.ProfilePages;


import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Entity
@Table(name = "Addresses")
public class addressmodel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "AddressID")
    private Integer AddressID;


    @Column(name = "Street")
    private String Street;


    @Column(name = "HouseNumber")
    private Integer HouseNumber;


    @Column(name = "City")
    private String City;


    @Column(name = "PostCode")
    private String PostCode;


    @Column(name = "LandMark")
    private String LandMark;

    public Integer getAddressID() {
        return AddressID;
    }

    public void setAddressID(Integer addressID) {
        AddressID = addressID;
    }

    public String getStreet() {
        return Street;
    }

    public void setStreet(String street) {
        Street = street;
    }

    public Integer getHouseNumber() {
        return HouseNumber;
    }

    public void setHouseNumber(Integer houseNumber) {
        HouseNumber = houseNumber;
    }

    public String getCity() {
        return City;
    }

    public void setCity(String city) {
        City = city;
    }

    public String getPostCode() {
        return PostCode;
    }

    public void setPostCode(String postCode) {
        PostCode = postCode;
    }

    public String getLandMark() {
        return LandMark;
    }

    public void setLandMark(String landMark) {
        LandMark = landMark;
    }
}
