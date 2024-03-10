import { useEffect, useState } from "react"

async function useFetchData(fetchdata) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchDataApi() {
            const res = await fetch(fetchdata);
            const data = await res.json()
            setData(data)
        }
        fetchDataApi();

    }, [fetchdata])

    return data;
}

export default useFetchData;

