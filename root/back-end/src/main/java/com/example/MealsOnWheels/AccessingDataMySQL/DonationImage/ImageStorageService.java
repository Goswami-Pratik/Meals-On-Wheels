//package com.example.MealsOnWheels.AccessingDataMySQL.DonationImage;
//
//import java.io.IOException;
//import java.util.stream.Stream;
//
//import mow.group10.repository.ImageRepository;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.util.StringUtils;
//import org.springframework.web.multipart.MultipartFile;
//
//import mow.group10.models.ImageModel;
//
//
//@Service
//public class ImageStorageService {
//
//        @Autowired
//        private ImageRepository imageRepository;
//
//        public ImageModel store(MultipartFile file) throws IOException {
//            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//            ImageModel FileDB = new ImageModel(fileName, file.getContentType(), file.getBytes());
//
//            return imageRepository.save(FileDB);
//        }
//
//        public ImageModel getFile(String id) {
//            return imageRepository.findById(id).get();
//        }
//
//        public Stream<ImageModel> getAllFiles() {
//            return imageRepository.findAll().stream();
//        }
//    }
//
//
