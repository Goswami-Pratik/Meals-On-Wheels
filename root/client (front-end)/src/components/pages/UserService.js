import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api';
class UserService{

    // getRestaurants(){
    //     return axios.get(USERS_REST_API_URL+'/browse-restaurants');
    // }

    addCart(userCart){

        return axios.post(USERS_REST_API_URL+'/usercart',userCart);
    }
    getCart(){
        return axios.get(USERS_REST_API_URL+'/get_cart');
    }
    addPastOrder(pastOrder){

        return axios.post(USERS_REST_API_URL+'/pastorders',pastOrder);
    }
    deletePastOrder(id){
        return axios.delete(USERS_REST_API_URL + '/pastorders/' + id);
    }


    deleteCart(id){
        return axios.delete(USERS_REST_API_URL + '/usercart/' + id);
    }

    checkout(){
        return axios.delete(USERS_REST_API_URL + '/checkout');
    }



    
    getFood(){
        return axios.get(USERS_REST_API_URL+'/browse');
    }
    createFood(food){

        return axios.post(USERS_REST_API_URL+'/add_food',food);
    }
    getFoodById(foodId){

        return axios.get(USERS_REST_API_URL + '/browse/'+foodId);
    }
    updateFood(food,foodId){
        return axios.put(USERS_REST_API_URL + '/browse/' + foodId, food);
    }
    deleteFood(foodId){
        return axios.delete(USERS_REST_API_URL + '/browse/' + foodId);
    }
}

export default new UserService();