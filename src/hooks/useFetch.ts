import { useEffect, useState } from "react";

const useFetch = (pageName: string): { complete: boolean; data: unknown } => {
  const API_URL = "";
  const [complete, setComplete] = useState<boolean>(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (pageName) {
      const fetchData = async () => {
        const response = await fetch(
          `${API_URL}/wordpress/wp-json/wp/v2/pages?slug=${pageName}`
        );
        const data = await response.json();
        const [{ acf }] = data;
        setData(acf);
        setComplete(true);
      };

      fetchData();
    }
  }, [pageName]);

  return { complete, data };
};

export default useFetch;
