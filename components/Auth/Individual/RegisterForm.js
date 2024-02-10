import Button from "@components/Button/Button";
import InputField, { Label } from "@components/InputField/InputField";
import { RegularText } from "@components/Typography/Typography";
import { Divider } from "@components/Utilities/Utilities";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import useAuth from "hooks/useAuth";
import useForm from "hooks/useForm";

const FormContainer = styled.form`
  margin-bottom: 5rem;
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const EyeIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;

const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15rem;
  margin-top: 3rem;
`;

const RegisteredContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.5rem;
  margin-bottom: 25rem;
`;

export default function IndividualRegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    password: "",
    confirm_password: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = "First name is required";
    }
    if (!values.last_name) {
      errors.last_name = "Last name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    } else if (values.password.length > 20) {
      errors.password = "Password must be less than 20 characters long";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
        values.password
      )
    ) {
      errors.password =
        "Password must contain at least 8 characters with at least one lowercase letter, one uppercase letter, one number, and one special character";
    }
    if (!values.confirm_password) {
      errors.confirm_password = "Confirm password is required";
    } else if (values.confirm_password !== values.password) {
      errors.confirm_password = "Passwords do not match";
    }
    return errors;
  };

  const { loading, error, resetError, register } = useAuth();
  const { values, handleChange, reset, handleSubmit, errors } = useForm(
    initialState,
    validate
  );

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleFormSubmit = async () => {
    const response = await register(values, "/auth/register", "individual");
    console.log(response);
    if (response.status === 201) {
      reset();
      resetError();
      // router.push("/dashboard");
      console.log("Registration successful!");
    } else {
      console.log("Registration failed!");
    }
  };
  return (
    <>
      <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
        {error && <RegularText color="red">{error}</RegularText>}
        <Divider topBottom="0.5rem">
          <Label>First name</Label>
          <InputField
            type="text"
            placeholder="John"
            name="first_name"
            value={values.first_name}
            onChange={handleChange}
            radius=".5rem"
          />
          {errors.first_name && (
            <RegularText fontSize="1.3rem" fontWeight="500" color="red">
              {errors.first_name}
            </RegularText>
          )}
        </Divider>
        <Divider topBottom="0.5rem">
          <Label>Last name</Label>
          <InputField
            type="text"
            placeholder="Doe"
            name="last_name"
            value={values.last_name}
            onChange={handleChange}
            radius=".5rem"
          />
          {errors.last_name && (
            <RegularText fontSize="1.3rem" fontWeight="500" color="red">
              {errors.last_name}
            </RegularText>
          )}
        </Divider>
        <Divider topBottom="0.5rem">
          <Label>Email address</Label>
          <InputField
            type="text"
            placeholder="johndoe@email.com"
            name="email"
            value={values.email}
            onChange={handleChange}
            radius=".5rem"
          />
          {errors.email && (
            <RegularText fontSize="1.3rem" fontWeight="500" color="red">
              {errors.email}
            </RegularText>
          )}
        </Divider>
        <Divider topBottom="0.5rem">
          <Label>Phone number</Label>
          <InputField
            type="text"
            placeholder="080223356783"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            radius=".5rem"
          />
          {errors.phone && (
            <RegularText fontSize="1.3rem" fontWeight="500" color="red">
              {errors.phone}
            </RegularText>
          )}
        </Divider>
        <Divider topBottom="0.5rem">
          <Label>Gender</Label>
          <InputField
            type="text"
            placeholder="Male"
            name="gender"
            value={values.gender}
            onChange={handleChange}
            radius=".5rem"
          />
        </Divider>
        <Divider topBottom="0.5rem">
          <Label>Address</Label>
          <InputField
            type="text"
            placeholder="Lagos, Nigeria"
            name="address"
            value={values.address}
            onChange={handleChange}
            radius=".5rem"
          />
        </Divider>
        <Divider topBottom="0.5rem">
          <Label>Password</Label>
          <PasswordContainer>
            <InputField
              type={showPassword ? "text" : "password"}
              placeholder="***********"
              name="password"
              value={values.password}
              onChange={handleChange}
              radius=".5rem"
            />
            <EyeIcon onClick={handleShowPassword}>
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </EyeIcon>
          </PasswordContainer>
          {errors.password && (
            <RegularText fontSize="1.3rem" color="red">
              {errors.password}
            </RegularText>
          )}
        </Divider>
        <Divider topBottom="0.5rem">
          <Label>Confirm Password</Label>
          <PasswordContainer>
            <InputField
              type={showConfirmPassword ? "text" : "password"}
              placeholder="***********"
              name="confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
              radius=".5rem"
            />
            <EyeIcon onClick={handleShowConfirmPassword}>
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </EyeIcon>
          </PasswordContainer>
          {errors.confirm_password && (
            <RegularText fontSize="1.3rem" color="red">
              {errors.confirm_password}
            </RegularText>
          )}
        </Divider>
        <SubmitButtonContainer>
          <Button
            width="100%"
            borderRadius="3rem"
            disabled={loading}
            type="submit"
          >
            {loading ? "Loading..." : "Next"}
          </Button>
          <RegisteredContainer>
            <RegularText>Registered fundraiser?</RegularText>
            <Link href="individual/login" passHref>
              <RegularText
                color="#0C96C4"
                cursor="pointer"
                fontWeight="600"
                margin="0 0 0 0.9rem"
              >
                Log in
              </RegularText>
            </Link>
          </RegisteredContainer>
        </SubmitButtonContainer>
      </FormContainer>
    </>
  );
}
