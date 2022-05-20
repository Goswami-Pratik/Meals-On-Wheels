//package com.example.MealsOnWheels.AccessingDataMySQL.DonationImage;
//import javax.persistence.*;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//import org.hibernate.annotations.GenericGenerator;
//
//@Entity
//@Table(name = "files")
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//public class ImageModel {
//
//        @Id
//        @GeneratedValue(generator = "uuid")
//        @GenericGenerator(name = "uuid", strategy = "uuid2")
//        private String id;
//
//        private String name;
//
//        private String type;
//
//
//        @Lob
//        private byte[] data;
//
//        public ImageModel(String name, String type, byte[] data) {
//            this.name = name;
//            this.type = type;
//            this.data = data;
//        }
//    }
//
//
