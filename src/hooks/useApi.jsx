import { useEffect, useState } from "react";

/**
 * A custom React hook for making API requests and managing loading and error states.
 *
 * @param {string} url - The URL of the API endpoint to fetch data from.
 * @returns {{
 *   data: Array<any>,
 *   isLoading: boolean,
 *   isError: boolean
 * }} An object containing the fetched data, loading state, and error state.
 */
const useApi = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, isLoading, isError };
};

export default useApi;
