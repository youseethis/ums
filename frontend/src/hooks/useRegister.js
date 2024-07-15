// frontend/src/hooks/useRegister.js
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import generateRandomPassword from '../utils/passwordUtils'; // Import function to generate random password

const useRegister = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (userData) => {
    try {
      setLoading(true);
      const password = generateRandomPassword(8); // Generate random password
      const userDataWithPassword = { ...userData, credentials: { email: userData.email, password } }; // Include password in userData
      const response = await axios.post('/users', userDataWithPassword, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Registration successful:', response.data);
      toast.success('User added successfully'); // Display toast message
      // Store registered email in localStorage
      localStorage.setItem('registeredEmail', userData.email);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err.response?.data?.message || 'Error'); // Handle specific error messages if available
    } finally {
      setLoading(false);
    }
  };

  return {
    isLoading,
    error,
    register,
  };
};

export default useRegister;
