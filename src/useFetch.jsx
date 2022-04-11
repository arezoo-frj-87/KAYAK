import { useEffect, useState } from "react";
import fetchJsonp from "fetch-jsonp";

export default function useFetch(url) {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                await fetchJsonp(url, {
                    jsonpCallback: "jsonp"
                })
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (json) {
                        setData(json);
                    })
                    .catch(function (ex) {
                        setError(ex);
                    });
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return { isLoading, error, data };
}
