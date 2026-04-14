import { useApi } from "./useApi";

export const useLogout = () => {
  const { callApi, loading, error } = useApi();

  const logoutUser = () => {
    return callApi("/v1/auth/logout", {
      method: "GET", // GET request
      withCredentials: true, // ✅ axios me session cookies ke liye must
      headers: { "Content-Type": "application/json" },
    });
  };
    return { logoutUser, loading, error };
};

