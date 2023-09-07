/**
 * Custom hook for interacting with the browser's local storage.
 *
 * @returns {{
 *   save: (key: string, value: any) => void,
 *   load: (key: string) => any | null,
 *   remove: (key: string) => void,
 *   clear: () => void
 * }} An object with functions for saving, loading, removing, and clearing data in local storage.
 *
 * @example
 * // Usage:
 * {save, load, remove, clear} = useStorage();
 *
 * // Save data to local storage
 * save('myKey', { name: 'John' });
 *
 * // Load data from local storage
 * const data = load('myKey');
 *
 * // Remove data from local storage
 * remove('myKey');
 *
 * // Clear all data from local storage
 * clear();
 */
const useStorage = () => {
  const save = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const load = (key) => {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  };

  const remove = (key) => {
    const value = localStorage.removeItem(key);
  };

  const clear = () => {
    localStorage.clear();
  };

  return { save, load, remove, clear };
};

export default useStorage;
