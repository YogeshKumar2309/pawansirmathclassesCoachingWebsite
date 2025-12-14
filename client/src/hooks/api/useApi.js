import { useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = async (endpoint, options = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios({
        url: `${BASE_URL}${endpoint}`,
        withCredentials: true,      // 🔥 must for session cookies
        ...options,                 // method, data, headers etc
      });

      return response.data;        // axios automatically parses JSON
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { callApi, loading, error };
};
