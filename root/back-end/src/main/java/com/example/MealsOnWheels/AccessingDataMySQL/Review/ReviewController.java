package com.example.MealsOnWheels.AccessingDataMySQL.Review;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/review")

public class ReviewController {

    @Autowired
    private ReviewRepo reviewRepo;

    @GetMapping("/getReview")
    public List<Review> getReviews(){
        return this.reviewRepo.findAll();
    }

    @PostMapping("/newReview")
    public void saveReview (@Valid @RequestBody ReviewRequest reviewRequest) {
        Review review = new Review(reviewRequest.getName(), reviewRequest.getDescription());
        reviewRepo.save(review);
    }

}
