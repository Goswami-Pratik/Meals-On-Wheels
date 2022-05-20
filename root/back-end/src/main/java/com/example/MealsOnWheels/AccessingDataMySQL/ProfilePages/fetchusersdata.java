package com.example.MealsOnWheels.AccessingDataMySQL.ProfilePages;

import com.example.MealsOnWheels.AccessingDataMySQL.appuser.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface fetchusersdata extends JpaRepository<Users, String> {
}
