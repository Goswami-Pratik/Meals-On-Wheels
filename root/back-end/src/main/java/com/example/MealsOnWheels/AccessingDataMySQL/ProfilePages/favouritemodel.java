package com.example.MealsOnWheels.AccessingDataMySQL.ProfilePages;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Time;
import java.util.Date;


@NoArgsConstructor
@Entity
@Table(name = "Favourites")
public class favouritemodel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "FavID")
    private Integer FavID;


    @Column(name = "FavRestaurantName")
    private String FavRestaurantName;


    @Column(name = "FavRestaurantAddress")
    private String FavRestaurantAddress;


    @Column(name = "FavRestaurantRating")
    private Integer FavRestaurantRating;


    @Column(name = "FavItem")
    private String FavItem;


    @Column(name = "FavItemDiscount")
    private String FavItemDiscount;


    @Column(name = "FavItemDelTime")
    private Time OrderDeliveryDate;


    @Column(name = "FavItemCost")
    private Integer FavItemCost;

    @Column(name = "FavUserID")
    private Integer FavUserID;

    public Integer getFavID() {
        return FavID;
    }

    public void setFavID(Integer favID) {
        FavID = favID;
    }

    public String getFavRestaurantName() {
        return FavRestaurantName;
    }

    public void setFavRestaurantName(String favRestaurantName) {
        FavRestaurantName = favRestaurantName;
    }

    public String getFavRestaurantAddress() {
        return FavRestaurantAddress;
    }

    public void setFavRestaurantAddress(String favRestaurantAddress) {
        FavRestaurantAddress = favRestaurantAddress;
    }

    public Integer getFavRestaurantRating() {
        return FavRestaurantRating;
    }

    public void setFavRestaurantRating(Integer favRestaurantRating) {
        FavRestaurantRating = favRestaurantRating;
    }

    public String getFavItem() {
        return FavItem;
    }

    public void setFavItem(String favItem) {
        FavItem = favItem;
    }

    public String getFavItemDiscount() {
        return FavItemDiscount;
    }

    public void setFavItemDiscount(String favItemDiscount) {
        FavItemDiscount = favItemDiscount;
    }

    public Time getOrderDeliveryDate() {
        return OrderDeliveryDate;
    }

    public void setOrderDeliveryDate(Time orderDeliveryDate) {
        OrderDeliveryDate = orderDeliveryDate;
    }

    public Integer getFavItemCost() {
        return FavItemCost;
    }

    public void setFavItemCost(Integer favItemCost) {
        FavItemCost = favItemCost;
    }

    public Integer getFavUserID() {
        return FavUserID;
    }

    public void setFavUserID(Integer favUserID) {
        FavUserID = favUserID;
    }
}
