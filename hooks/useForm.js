import { useState } from "react";

const useForm = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (callback) => (event) => {
    event.preventDefault();
    console.log("submitted");
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      callback();
    }
  };

  const reset = () => {
    setValues(initialState);
    setErrors({});
  };

  return { values, handleChange, handleSubmit, reset, errors };
};

export default useForm;