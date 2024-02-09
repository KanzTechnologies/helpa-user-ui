import Button from "@components/Button/Button";
import InputField, { Label } from "@components/InputField/InputField";
import { BadgeLink } from "@components/Link/Link";
import { RegularText } from "@components/Typography/Typography";
import { Divider } from "@components/Utilities/Utilities";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
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
  margin-bottom: 10rem;
`;

const RegisteredContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 20rem;
`;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <FormContainer>
        <Divider topBottom="0.5rem">
          <Label>Email address</Label>
          <InputField
            type="email"
            placeholder="johndoe@email.com"
            radius=".5rem"
          />
        </Divider>
        <Divider topBottom="0.5rem">
          <Label>Organization / Full name</Label>
          <InputField type="text" placeholder="John Doe" radius=".5rem" />
        </Divider>
        <Divider topBottom="0.5rem">
          <Label>Password</Label>
          <PasswordContainer>
            <InputField
              type={showPassword ? "text" : "password"}
              placeholder="***********"
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
          {/* <InputField
            type="password"
            placeholder="***********"
            radius=".5rem"
          />
          <EyeIcon>
            <AiOutlineEye size={20} />
          </EyeIcon> */}
        </Divider>
        <ForgotPasswordContainer>
          <Link href="/forgotpassword" passHref>
            <BadgeLink margin="0.5rem 0">Forgot Password?</BadgeLink>
          </Link>
        </ForgotPasswordContainer>
      </FormContainer>
      <SubmitButtonContainer>
        <Button width="100%" borderRadius="3rem">
          Login
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
    </>
  );
}
