import { useState } from "react";
import useStorage from "./useStorage";

/**
 * Custom hook for handling authentication-related form submissions.
 *
 * @returns {Object} An object containing various states and functions related to form submission.
 * @property {Array|Object} data - The response data from the server upon successful submission.
 * @property {boolean} isLoading - A flag indicating whether the form submission is in progress.
 * @property {boolean} isError - A flag indicating whether an error occurred during form submission.
 * @property {boolean} isSuccess - A flag indicating whether the form submission was successful.
 * @property {Function} sendFormData - A function to send form data to the specified URL.
 * @property {Function} setIsSuccess - A function to set the `isSuccess` flag manually (useful for resetting).
 *
 * @example
 * // Example usage of the useAuthForm hook:
 * const {
 *   data,
 *   isLoading,
 *   isError,
 *   isSuccess,
 *   sendFormData,
 *   setIsSuccess,
 * } = useAuthForm();
 *
 * // Sending form data to the server
 * const onSubmit = (formData) => {
 *   sendFormData('https://api.example.com/login', 'POST', formData, accessToken);
 * };
 *
 * // Manually set the isSuccess flag to reset it
 * setIsSuccess(false);
 */
const useAuthForm = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // New state for success
  const { save, load } = useStorage();

  async function sendFormData(
    url,
    method,
    formData,
    accessToken,
    shouldSaveToken = true,
    shouldRefresh = true
  ) {
    try {
      setIsLoading(true);
      setIsError(false);
      setIsSuccess(false);

      const headers = {
        "Content-Type": "application/json; UTF-8",
      };
      const options = {
        method,
        headers,
      };

      if (accessToken) {
        const accessToken = load("accessToken");
        headers["Authorization"] = `Bearer ${accessToken}`;
      }
      if (formData) {
        options.body = JSON.stringify(formData);
      }

      const response = await fetch(url, options);

      if (response.ok) {
        setIsSuccess(true);
        const json = await response.json();
        setData(json);

        if (shouldSaveToken) {
          const { accessToken, venueManager, ...user } = json;
          console.log("AccessToken:", accessToken);
          console.log("User Data:", user);
          save("venueManager", venueManager);
          save("accessToken", accessToken);
          save("user", user);
          window.location.reload();
        }

        if (shouldRefresh) {
          window.location.reload();
        }
      } else {
        const json = await response.json();
        setData(json);
        console.log("Error JSON:", json); // Log error response JSON
        setIsError(true);
      }
    } catch (error) {
      console.log("Error:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    data,
    isLoading,
    isError,
    sendFormData,
    isSuccess,
    setIsSuccess,
  };
};

export default useAuthForm;
