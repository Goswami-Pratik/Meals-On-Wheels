package com.example.MealsOnWheels.AccessingDataMySQL.ProfilePages;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "Orders")
public class ordermodel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "OrderID")
    private Integer OrderID;

    @NotNull(message = "Order Number cannot be null.")
    @Column(name = "OrderNumber")
    private Integer OrderNumber;

    @NotNull(message = "OrderPrice cannot be null.")
    @Column(name = "OrderPrice")
    private Integer OrderPrice;

    @NotNull(message = "Order Quantity cannot be null.")
    @Column(name = "OrderQuantity")
    private Integer OrderQuantity;

    @NotNull(message = "Order Name cannot be null.")
    @Column(name = "OrderName")
    private String OrderName;

    @NotNull(message = "Restaurant Name cannot be null.")
    @Column(name = "OrderRestaurantName")
    private String OrderRestaurantName;

    @Column(name = "OrderRestaurantAddress")
    private String OrderRestaurantAddress;

    @Column(name = "OrderDeliveryDate")
    private String OrderDeliveryDate;

    @Column(name = "OrderUserID")
    private Integer OrderUserID;

    @UpdateTimestamp
    @Temporal(value = TemporalType.TIMESTAMP)
    @Column(name = "OrderDate")
    private Date OrderDate;

    public ordermodel(@NotNull(message = "Order Number cannot be null.") Integer orderNumber,
                      @NotNull(message = "OrderPrice cannot be null.") Integer orderPrice,
                      @NotNull(message = "Order Quantity cannot be null.") Integer orderQuantity,
                      @NotNull(message = "Order Name cannot be null.") String orderName,
                      @NotNull(message = "Restaurant Name cannot be null.") String orderRestaurantName,
                      String orderRestaurantAddress, String orderDeliveryDate, Integer orderUserID) {
        OrderNumber = orderNumber;
        OrderPrice = orderPrice;
        OrderQuantity = orderQuantity;
        OrderName = orderName;
        OrderRestaurantName = orderRestaurantName;
        OrderRestaurantAddress = orderRestaurantAddress;
        OrderDeliveryDate = orderDeliveryDate;
        OrderUserID = orderUserID;
    }

}
