import { useParams } from "react-router-dom";
import useApi from "../../../../hooks/useApi";

/**
 * useSetup Custom Hook
 *
 * This custom hook is responsible for fetching setup data for a venue based on its ID.
 * It retrieves information about the venue, including details about the owner and bookings.
 *
 * @returns {Object} An object containing the following properties:
 *   - data: The fetched setup data for the venue.
 *   - isError: A boolean indicating whether an error occurred during the fetch.
 *   - isLoading: A boolean indicating whether the data is currently being loaded.
 *
 * @example
 * // Example usage of useSetup custom hook
 * const { data, isError, isLoading } = useSetup();
 */
const useSetup = () => {
  let { id } = useParams();
  const API_URL = `https://nf-api.onrender.com/api/v1/holidaze/venues/${id}?_owner=true&_bookings=true`;
  const { data, isError, isLoading } = useApi(API_URL);
  return { data, isError, isLoading };
};

export default useSetup;
