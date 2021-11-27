// import React, { useEffect, useState } from 'react';

// const useFetch = ({ url }) => {
//     const [response, setResponse] = useState(null);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         fetch(`https://opentdb.com${url}`)
//         .then(res => res.json())
//         .then(data => setResponse(data))
//         .catch(err => setError(err))
//     }, [url])

//     return { response, error }
// };

// export default useFetch;

import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://opentdb.com";

const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((res) => setResponse(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, [url]);

  return { response, error, loading };
};

export default useAxios;