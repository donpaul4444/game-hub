import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'63154a97a3ff42699b7de4e04761a1fe'
    }
})