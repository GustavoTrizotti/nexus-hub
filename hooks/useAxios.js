import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = (params) => {
  axios.defaults.baseURL = params.url;
  const [res, setRes] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await axios
      .request(params)
      .then((res) => setRes(res))
      .catch((err) => setErr(err))
      .finally(() => setLoading(false));
  } 

  useEffect(() => {
    fetchData(params)
  }, []);

  return [res, err, loading];
};

export default useAxios;
