import useStorage from "./useStorage";
import { useState } from "react";

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
const useSendForm = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { load } = useStorage();
  const token = load("accessToken");

  async function sendFormData(formData) {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; UTF-8",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const json = await response.json();
      setData(json);
      console.log(json);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return { data, isLoading, isError, sendFormData };
};

export default useSendForm;
