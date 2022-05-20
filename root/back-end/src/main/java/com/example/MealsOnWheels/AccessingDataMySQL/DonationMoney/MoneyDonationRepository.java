package com.example.MealsOnWheels.AccessingDataMySQL.DonationMoney;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MoneyDonationRepository extends JpaRepository<MoneyDonation, Long> {
}
