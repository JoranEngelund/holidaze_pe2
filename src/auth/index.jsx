import useStorage from "../hooks/useStorage";

/**
 * Check and retrieve the access token from storage.
 *
 * @returns {string | null} The access token if available, otherwise null.
 *
 * @example
 * // Usage:
 * const token = checkToken();
 * if (token) {
 *   // Token is available, proceed with authentication.
 * } else {
 *   // Token is not available, handle unauthenticated state.
 * }
 */
const checkToken = () => {
  const { load } = useStorage();
  const token = load("accessToken");
  return token;
};

export default checkToken;
