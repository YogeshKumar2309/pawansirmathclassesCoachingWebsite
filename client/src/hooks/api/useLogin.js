import { useApi } from "./useApi";

export const useLogin = () => {
  const { callApi, loading, error } = useApi();

  const loginUser = (userData) => {
    return callApi("/v1/auth/login", {
      method: "POST",
       headers: { "Content-Type": "application/json" },
      data: userData,
    });
  };

  return { loginUser, loading, error };
};
