import { useState } from "react";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetch = async (url, userData) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error("An error occurred");
      }
      setLoading(false);
      return true;
    } catch (err) {
      setLoading(false);
      setError(err.message);
      return false;
    }
  };

  const register = async (userData) => {
    return await handleFetch("/api/register", userData);
  };

  const login = async (userData) => {
    return await handleFetch("/api/login", userData);
  };

  return { loading, error, register, login };
};

export default useAuth;
