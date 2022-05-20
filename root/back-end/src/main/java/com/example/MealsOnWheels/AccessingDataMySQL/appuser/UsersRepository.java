package com.example.MealsOnWheels.AccessingDataMySQL.appuser;
import com.example.MealsOnWheels.AccessingDataMySQL.appuser.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface UsersRepository extends JpaRepository<Users, Long> {
    Optional<Users> findByEmail(String email);

    @Transactional
    @Modifying
    @Query("UPDATE Users u " +
            "SET u.accountVerified = TRUE WHERE u.email = ?1")
    int enableUserAccess(String email);

    @Transactional
    @Modifying
    @Query("UPDATE Users u " +
            "SET u.userRole = 'ADMIN' WHERE u.id = ?1")
    int giveAdminAccess(long userID);
}
