import React, { useEffect, useState } from 'react';

const useFetch = ({ url }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`https://opentdb.com${url}`)
        .then(res => res.json())
        .then(data => setResponse(data))
        .catch(err => setError(err))
    }, [url])

    return { response, error }
};

export default useFetch;