import axios from 'axios'

const RESTAURANTS_REST_API_URL = 'http://localhost:8080/api/restaurantes';

class foundService {

    getRestaurantes(){
       return axios.get(RESTAURANTS_REST_API_URL)
    }
}


export default new foundService()