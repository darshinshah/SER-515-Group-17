import axios from "axios";

const API_URL = "http://localhost:8080/api/";
const getPlayerData = () =>{

    return axios.get(API_URL + "players", { "Content-Type": "application/json" })
}

export default getPlayerData;