/**
 * @file useFetchData.ts
 * @description Custom hook to fetch data from a given URL and manage the loading, data, and error states.
 */

import { useState, useEffect } from 'react';

/**
 * Custom hook for fetching data.
 *
 * @template T - The expected type of the data being fetched.
 * @param {string} url - The URL from which to fetch data.
 * @returns {Object} An object containing the fetched data, loading state, and any errors.
 * @returns {T | null} data - The fetched data, or `null` if not yet available.
 * @returns {boolean} loading - A boolean indicating if the fetch operation is in progress.
 * @returns {string | null} error - An error message, or `null` if there is no error.
 */
export const useFetchData = <T>(
  url: string
): { data: T | null; loading: boolean; error: string | null } => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};