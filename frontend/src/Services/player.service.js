import axios from "axios";

const API_URL = "http://localhost:8082/v1/";
const getPlayerData = () =>{

    return axios.get(API_URL + "players", { "Content-Type": "application/json" })
}

export default getPlayerData;