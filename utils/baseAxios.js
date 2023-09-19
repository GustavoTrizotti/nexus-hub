import axios from "axios"

const { token } = useAuth();

export default axios.create({
    baseURL: "http://192.168.0.12:8000/api/v1",
    responseType: "json",
    headers: {
        Authorization: token,
    }
})