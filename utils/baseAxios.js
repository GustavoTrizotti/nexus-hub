import axios from "axios"

export default axios.create({
    baseURL: "http://192.168.0.12:8080/api/v1",
    responseType: "json",
})