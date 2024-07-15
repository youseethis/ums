// File name : frontend/src/hooks/useLogin.js
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/users/login', { // Ensure this path matches your backend endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const text = await response.text();
      let json;
      try {
        json = JSON.parse(text);
      } catch (e) {
        throw new Error('Server response was not valid JSON: ' + text);
      }

      if (!response.ok) {
        throw new Error(json.error || 'Login failed');
      }

      // Save the user to local storage
      localStorage.removeItem('registeredEmail');
      localStorage.setItem('user', JSON.stringify(json));

      // Update the auth context
      dispatch({ type: 'LOGIN', payload: json });

      setIsLoading(false);
    } catch (err) {
      console.error('Login error:', err);
      setIsLoading(false);
      setError(err.message);
    }
  };

  return { login, isLoading, error };
};
