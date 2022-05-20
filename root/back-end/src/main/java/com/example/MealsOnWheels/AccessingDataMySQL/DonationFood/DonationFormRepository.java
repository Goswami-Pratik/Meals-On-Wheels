package com.example.MealsOnWheels.AccessingDataMySQL.DonationFood;

import java.util.Optional;


//import mow.group10.models.ERole;
//import mow.group10.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//import mow.group10.models.DonationFormModel;

@Repository
public interface DonationFormRepository extends JpaRepository<DonationFormModel, Long> {
    Optional<DonationFormModel> existsById(DonationFormModel itemName);

}
