import axios from "axios"

export default axios.create({
    baseURL: "http://10.115.71.55:8000/api/v1",
    responseType: "json",
})