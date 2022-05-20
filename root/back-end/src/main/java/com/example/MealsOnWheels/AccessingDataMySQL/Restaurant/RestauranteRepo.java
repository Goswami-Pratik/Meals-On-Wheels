package com.example.MealsOnWheels.AccessingDataMySQL.Restaurant;

import com.example.MealsOnWheels.AccessingDataMySQL.appuser.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Repository
public interface RestauranteRepo extends JpaRepository<Restaurante, Long>  {
    Optional<Restaurante> findRestauranteById(Long ID);

    @Transactional
    @Modifying
    @Query("SELECT postcode from Restaurante")
    List<String> getAllRestaurantPostcodes();

    @Transactional
    @Modifying
    @Query("SELECT id, postcode from Restaurante")
    String[][] getAllRestaurantPostcodesAndID();
}
