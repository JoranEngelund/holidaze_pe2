import { useParams } from "react-router-dom";
import { PROFILE_URL } from "../../../../constants";
import useGetProfile from "../../../../hooks/useGetProfile";

/**
 * Sets up data retrieval for the Profile component.
 * @returns {Object} An object containing data and loading/error states.
 * @description This function prepares the necessary data for the Profile component,
 * including user data, bookings, and venues, and manages the loading and error states.
 */
const setup = () => {
  let { name } = useParams();
  const PROFILES_URL = `${PROFILE_URL}${name}?_bookings=true&_venues=true&`;
  const { data, isLoading, isError } = useGetProfile(PROFILES_URL);
  const {
    data: bookingData,
    isLoading: loading,
    isError: error,
  } = useGetProfile(
    `https://nf-api.onrender.com/api/v1/holidaze/profiles/${name}/bookings?sort=dateFrom&sortOrder=asc&_venue=true`
  );

  return { data, isLoading, isError, bookingData, loading, error };
};

export default setup;
