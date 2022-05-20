package com.example.MealsOnWheels.AccessingDataMySQL.Restaurant;

import java.lang.reflect.Array;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/restaurantes")
public class RestauranteController {
	@Autowired
	private RestauranteRepo restauranteRepo;


	@GetMapping()
	public List<Restaurante> getRestaurantes(){
		return this.restauranteRepo.findAll();
	}

	@PostMapping("/checkPostcode")
	public Boolean checkPostCodeAvailability(@Valid @RequestBody PostCodeRequest postCodeRequest) {
		List<String> resturantPostcodes = restauranteRepo.getAllRestaurantPostcodes();
		List<Long> pricePerPostcode = new ArrayList<>();
		for (String currentPostCode :
				resturantPostcodes) {
			Long price = Math.abs((Long.valueOf(postCodeRequest.getDeliveryPostCode(), 36) - Long.valueOf(currentPostCode, 36))/10000);
			pricePerPostcode.add(price);
		}
		for (Long currentPrice :
				pricePerPostcode) {
			Boolean decision = currentPrice <= 22;
			if(decision) return true;
		}
		return false;
	}

	@PostMapping("/getValidRestaurant")
	public List<Optional<Restaurante>> getValidRestaurant(@Valid @RequestBody PostCodeRequest postCodeRequest) {
		String[][] allRestaurantPostcodesAndID = restauranteRepo.getAllRestaurantPostcodesAndID();
		System.out.println(Arrays.deepToString(allRestaurantPostcodesAndID));
		List<Boolean> restaurantValidList = new ArrayList<>();
		for (String[] currentPostCodeAndIDPair :
				allRestaurantPostcodesAndID) {
			Long price = Math.abs((Long.valueOf(postCodeRequest.getDeliveryPostCode(), 36) - Long.valueOf(currentPostCodeAndIDPair[1], 36))/10000);
			restaurantValidList.add(price <= 22);
		}
		List<Optional<Restaurante>> finalRestaurantValidList = new ArrayList<>();
		for(int i = 0; i<restaurantValidList.size(); i++) {
			if (restaurantValidList.get(i)) {
				Optional<Restaurante> restauranteOptional = restauranteRepo.findRestauranteById(Long.parseLong(allRestaurantPostcodesAndID[i][0]));
				finalRestaurantValidList.add(restauranteOptional);
			}
		}

		return finalRestaurantValidList;
	}
}
