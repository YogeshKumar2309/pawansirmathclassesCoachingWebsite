import { useApi } from './useApi';

export const useRegister = () => {
  const { callApi, loading, error } = useApi();

  const registerUser = (userData) => {
    return callApi('/v1/auth/register', {
      method: 'POST',
      withCredentials: true,      // ✅ session cookies ke liye
      headers: { 'Content-Type': 'application/json' },
      data: userData,             // 🔥 axios me body ko 'data' bolte hain
    });
  };

  return { registerUser, loading, error };
};
