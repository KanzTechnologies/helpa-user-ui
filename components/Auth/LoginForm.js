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

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const initialState = {
    email: "",
    name: "",
    password: "",
  };

  const validate = (values) => {
    const errors = {};
    console.log(values);
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    return errors;
  };

  const { loading, error, reset, login } = useAuth();
  const { values, handleChange, handleSubmit, errors } = useForm(
    initialState,
    validate
  );

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = async () => {
    const success = await login(values);
    if (success) {
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
            <RegularText fontSize="1.3rem" fontWeight="500" color="red">{errors.email}</RegularText>
          )}
        </Divider>
        <Divider topBottom="0.5rem">
          <Label>Organization / Full name</Label>
          <InputField
            type="text"
            placeholder="John Doe"
            radius=".5rem"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <RegularText fontSize="1.3rem" fontWeight="500" color="red">{errors.name}</RegularText>}
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
            <RegularText fontSize="1.3rem"  color="red">{errors.password}</RegularText>
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
            <Link href="register" passHref>
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
