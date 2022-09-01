import { useEffect, useState } from "react";

const useFetch = (url, token) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  const fetchData = async () => {
    try {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw Error("Cannot be reach the server");
      }
      const data = await res.json();
      setdata(data);
      setloading(false);
      seterror(null);
    } catch (err) {
      setloading(false);
      seterror(err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url, token]);
  return { data, loading, error, setdata, setloading, seterror };
};

export default useFetch;
