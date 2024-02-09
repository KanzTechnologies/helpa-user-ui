import Button from "@components/Button/Button";
import InputField, { Label } from "@components/InputField/InputField";
import { RegularText } from "@components/Typography/Typography";
import { Divider } from "@components/Utilities/Utilities";
import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  margin-bottom: 3rem;
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
      </FormContainer>
      <SubmitButtonContainer>
        <Button width="100%" borderRadius="3rem">
          Next
        </Button>
        <RegisteredContainer>
          <RegularText>Registered fundraiser?</RegularText>
          <RegularText color="#0C96C4" fontWeight="600" margin="0 0 0 0.9rem">
            Log in
          </RegularText>
        </RegisteredContainer>
      </SubmitButtonContainer>
    </>
  );
}