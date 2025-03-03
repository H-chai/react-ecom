import { useEffect, useState } from "react";

export function useApi(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(null);
        const response = await fetch(url);
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [url]);

  const tags = data.map((d) => d.tags);
  const tagsArray = [...new Set(tags.flat())];
  return { data, isLoading, isError, tagsArray };
}
