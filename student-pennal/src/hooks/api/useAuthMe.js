import { useApi } from "./useApi";

export const useAuthMe = () => {
  const { callApi, loading, error } = useApi();

  // check logged-in user (session based)
  const getMe = () => {
    return callApi("/v1/auth/me", {
      method: "GET",            // GET request
      withCredentials: true,    // ✅ axios me session cookies ke liye must
      headers: { "Content-Type": "application/json" },
    });
  };

  return { getMe, loading, error };
};
