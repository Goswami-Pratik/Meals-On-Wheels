DROP DATABASE if exists Meals_On_Wheels_DB_Dev;
CREATE DATABASE Meals_On_Wheels_DB_Dev;
Use Meals_On_Wheels_DB_Dev;

CREATE TABLE `address` (
    `id` bigint(19) unsigned NOT NULL AUTO_INCREMENT,
    `street` varchar(255),
    `city` varchar(255),
    `postcode` varchar(255),
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `users` (
  `id` bigint(19) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `email` varchar(255) NOT NULL,
#   `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address_id` bigint(19) unsigned DEFAULT NULL,
  `phone` TEXT DEFAULT NULL,
  `allergy` TEXT DEFAULT NULL,
  `verified` bit(1) NOT NULL DEFAULT 0,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP,
#   `account_locked` bit(1) NOT NULL DEFAULT 0,
  `account_locked` bit(1) DEFAULT 0,
  `user_role` varchar(255) NOT NULL DEFAULT 'USER',
  PRIMARY KEY (`id`),
  FOREIGN KEY (`address_id`) REFERENCES `address` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `driver` (
  `id` bigint(19) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(19) unsigned NOT NULL,
  `vehicle_registration` varchar(255) NOT NULL,
  `license_verified` bit(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `supplier` (
  `id` bigint(19) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `food_supplied` varchar(255) NOT NULL,
  `date_supplied` timestamp NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `menu` (
  `id` bigint(19) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `ingredients` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `available` bit(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `order` (
     `id` bigint(19) unsigned NOT NULL AUTO_INCREMENT,
     `driver` bigint(19) unsigned NOT NULL,
     `customer` bigint(19) unsigned NOT NULL,
     `items` bigint(19) unsigned NOT NULL,
     `delivered` bit(1) NOT NULL DEFAULT 0,
     `instructions` varchar(255) DEFAULT NULL,
     `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
     `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
     PRIMARY KEY (`id`),
     FOREIGN KEY (`driver`) REFERENCES `driver` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
     FOREIGN KEY (`customer`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
     FOREIGN KEY (`items`) REFERENCES `menu` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;