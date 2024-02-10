import Button from "@components/Button/Button";
import InputField, { Label } from "@components/InputField/InputField";
import { BadgeLink } from "@components/Link/Link";
import { RegularText } from "@components/Typography/Typography";
import { Divider } from "@components/Utilities/Utilities";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import useAuth from "hooks/useAuth";
import useForm from "hooks/useForm";
import { useRouter } from "next/router";

const FormContainer = styled.form`
  margin: 3rem 0;
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
  margin-bottom: 12rem;
  margin-top: 3rem;
`;

const RegisteredContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 24rem;
`;

export default function IndividualLoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const initialState = {
    email: "",
    password: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
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
    return errors;
  };

  const { loading, error, resetError, login } = useAuth();
  const { values, handleChange, handleSubmit, reset, errors } = useForm(
    initialState,
    validate
  );

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = async () => {
    const response = await login(values, "/auth/login");
    if (response.status === 200) {
      reset();
      router.push("/dashboard");
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
          <Label>Email address</Label>
          <InputField
            type="email"
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
        <ForgotPasswordContainer>
          <Link href="/forgotpassword" passHref>
            <BadgeLink margin="0.5rem 0">Forgot Password?</BadgeLink>
          </Link>
        </ForgotPasswordContainer>
        <SubmitButtonContainer>
          <Button
            width="100%"
            borderRadius="3rem"
            disabled={loading}
            type="submit"
          >
            {loading ? "Loading..." : "Login"}
          </Button>
          <RegisteredContainer>
            <RegularText>New Fundraiser?</RegularText>
            <Link href="/crowdfunding/auth/register" passHref>
              <RegularText
                color="#0C96C4"
                cursor="pointer"
                fontWeight="600"
                margin="0 0 0 0.9rem"
              >
                Create account
              </RegularText>
            </Link>
          </RegisteredContainer>
        </SubmitButtonContainer>
      </FormContainer>
    </>
  );
}
