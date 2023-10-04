import useStorage from "../../hooks/useStorage";

/**
 * Function to check user authentication status.
 * Redirects to the homepage if the user is not authenticated.
 * @function
 * @name CheckAuth
 * @returns {void}
 * @throws {Error} Will throw an error if the user is not authenticated.
 * @example
 * // Usage example
 * CheckAuth();
 */
const CheckAuth = () => {
  const { load } = useStorage();

  const token = load("accessToken");

  if (!token) {
    window.location.replace("/");
  }
};

export default CheckAuth;
