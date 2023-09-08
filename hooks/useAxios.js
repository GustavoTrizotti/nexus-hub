import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = (params) => {
    axios.defaults.baseURL = "http://localhost:8080/api/v1/"
    const [res, setRes] = useState('');
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        await axios.request(params)
        .then(res => setRes(res))
        .catch(err => setErr(err))
        .finally(() => setLoading(false))
    }, [])

    return [res, err, loading];
}

export default useAxios;