//package com.example.MealsOnWheels.AccessingDataMySQL.DonationImage;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
//
//
//import mow.group10.Service.ImageStorageService;
//import mow.group10.Response.ImageResponse;
//import mow.group10.Response.ResponseMessage;
//import mow.group10.models.ImageModel;
//
//
//@Controller
//@CrossOrigin(origins = "*", maxAge = 36000)
//@RequestMapping("/api/upload")
//public class ImageController {
//
//        @Autowired
//        private ImageStorageService imageStorageService;
//
//        @PostMapping("/upload")
//        public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
//            String message = "";
//            try {
//                imageStorageService.store(file);
//
//                message = "Uploaded the file successfully: " + file.getOriginalFilename();
//                return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
//            } catch (Exception e) {
//                message = "Could not upload the file: " + file.getOriginalFilename() + "!";
//                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
//            }
//        }
//
//        @GetMapping("/files")
//        public ResponseEntity<List<ImageResponse>> getListFiles() {
//            List<ImageResponse> files = imageStorageService.getAllFiles().map(ImageModel -> {
//                String fileDownloadUri = ServletUriComponentsBuilder
//                        .fromCurrentContextPath()
//                        .path("/files/")
//                        .path(ImageModel.getId())
//                        .toUriString();
//
//                return new ImageResponse(
//                        ImageModel.getName(),
//                        fileDownloadUri,
//                        ImageModel.getType(),
//                        ImageModel.getData().length,
//                        "nickName");
//            }).collect(Collectors.toList());
//
//            return ResponseEntity.status(HttpStatus.OK).body(files);
//        }
//
//        @GetMapping("/files/{id}")
//        public ResponseEntity<byte[]> getFile(@PathVariable String id) {
//            ImageModel imageModel = imageStorageService.getFile(id);
//
//            return ResponseEntity.ok()
//                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + imageModel.getName() + "\"")
//                    .body(imageModel.getData());
//        }
//    }
//
//
