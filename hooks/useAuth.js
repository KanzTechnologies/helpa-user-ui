import { useState } from "react";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BASE_URL = "https://staging-api.helpa.me/api/v1";

  const handleFetch = async (path, userData) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "An error occurred");
      }
      setLoading(false);
      return responseData;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      return error;
    }
  };

  const resetError = () => {
    setError(null);
  };

  const register = async (userData, url, type) => {
    let data;
    if (type === "individual") {
      data = {
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        phone: userData.phone,
        password: userData.password,
        confirm_password: userData.confirm_password,
      };
    } else {
      data = {
        contact_person_first_name: "",
        contact_person_last_name: "",
        contact_person_phone: "",
        company_name: "",
        company_email: "",
        company_phone: "",
        address: "",
        password: "",
        confirm_password: "",
      };
    }
    return await handleFetch(url, data);
  };

  const login = async (userData, url) => {
    return await handleFetch(url, userData);
  };

  return { loading, error, resetError, register, login };
};

export default useAuth;
