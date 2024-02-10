import Button from "@components/Button/Button";
import InputField, { Label } from "@components/InputField/InputField";
import { RegularText } from "@components/Typography/Typography";
import { Divider } from "@components/Utilities/Utilities";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  margin-bottom: 3rem;
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
  margin-top: 2rem;
  margin-bottom: 20rem;
`;

export default function NGORegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <>
      <FormContainer>
        <Divider topBottom="0.5rem">
          <Label>Contact person first name</Label>
          <InputField type="text" placeholder="John" radius=".5rem" />
        </Divider>
        <Divider topBottom="0.5rem">
          <Label>Contact person last name</Label>
          <InputField type="text" placeholder="Doe" radius=".5rem" />
        </Divider>
        <Divider topBottom="0.5rem">
          <Label>Contact person phone number</Label>
          <InputField type="text" placeholder="080223356783" radius=".5rem" />
        </Divider>
        <Divider topBottom="0.5rem">
          <Label>Company name</Label>
          <InputField type="text" placeholder="John" radius=".5rem" />
        </Divider>
        <Divider topBottom="0.5rem">
          <Label>Company email </Label>
          <InputField
            type="text"
            placeholder="johndoe@email.com"
            radius=".5rem"
          />
        </Divider>
        <Divider topBottom="0.5rem">
          <Label>Company phone number</Label>
          <InputField type="text" placeholder="080223356783" radius=".5rem" />
        </Divider>
        <Divider topBottom="0.5rem">
          <Label>Address</Label>
          <InputField type="text" placeholder="Lagos, Nigeria" radius=".5rem" />
        </Divider>
        <Divider topBottom="0.5rem">
          <Label>Password</Label>
          <PasswordContainer>
            <InputField
              type={showPassword ? "text" : "password"}
              placeholder="***********"
              name="password"
              // value={values.password}
              // onChange={handleChange}
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
          {/* {errors.password && (
            <RegularText fontSize="1.3rem" color="red">
              {errors.password}
            </RegularText>
          )} */}
        </Divider>
        <Divider topBottom="0.5rem">
          <Label>Confirm Password</Label>
          <PasswordContainer>
            <InputField
              type={showConfirmPassword ? "text" : "password"}
              placeholder="***********"
              name="confirm_password"
              // value={values.password}
              // onChange={handleChange}
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
          {/* {errors.password && (
            <RegularText fontSize="1.3rem" color="red">
              {errors.password}
            </RegularText>
          )} */}
        </Divider>
      </FormContainer>
      <SubmitButtonContainer>
        <Button width="100%" borderRadius="3rem">
          Next
        </Button>
        <RegisteredContainer>
          <RegularText>Registered fundraiser?</RegularText>
          <Link href="ngo/login" passHref>
            <RegularText
              color="#0C96C4"
              fontWeight="600"
              cursor="pointer"
              margin="0 0 0 0.9rem"
            >
              Log in
            </RegularText>
          </Link>
        </RegisteredContainer>
      </SubmitButtonContainer>
    </>
  );
}
