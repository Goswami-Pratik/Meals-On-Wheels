package com.example.MealsOnWheels.AccessingDataMySQL.Review;

import com.example.MealsOnWheels.AccessingDataMySQL.appuser.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface ReviewRepo extends JpaRepository<Review, Long>{
}
