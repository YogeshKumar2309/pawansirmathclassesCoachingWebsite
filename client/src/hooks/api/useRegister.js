import { useApi } from './useApi';

export const useRegister = () => {
  const { callApi, loading, error } = useApi();

  const registerUser = (userData) => {
    return callApi('/register', {   // Sirf endpoint
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
  };

  return { registerUser, loading, error };
};

