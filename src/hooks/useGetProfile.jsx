import useStorage from "./useStorage";
import { useEffect, useState } from "react";

/**
 * Custom hook for sending form data via a POST request.
 *
 * @param {string} url - The destination URL for the POST request.
 * @returns {{
 *   data: any,
 *   isLoading: boolean,
 *   isError: boolean,
 *   sendFormData: (formData: any) => Promise<void>
 * }} An object with properties and a function:
 * - `data` (any): Response data from the server.
 * - `isLoading` (boolean): Indicates if the request is in progress.
 * - `isError` (boolean): Indicates if an error occurred during the request.
 * - `sendFormData` (function): Sends form data via a POST request.
 *
 * @example
 * // Usage:
 * const { data, isLoading, isError, sendFormData } = useSendForm('https://example.com/api/submit');
 * const formData = { name: 'John', email: 'john@example.com' };
 * sendFormData(formData)
 */
const useGetProfile = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { load } = useStorage();
  const token = load("accessToken");

  useEffect(() => {
    async function sendRequest() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    sendRequest();
  }, []);

  return { data, isLoading, isError };
};

export default useGetProfile;
