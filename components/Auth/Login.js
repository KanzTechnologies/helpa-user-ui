import { BadgeLink } from "@components/Link/Link";
import {
  MediumHeaderDark,
  RegularText,
} from "@components/Typography/Typography";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 420px;
  margin: 4rem auto;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

export default function Login() {
  return (
    <>
      <Wrapper>
        <Container>
          <MediumHeaderDark margin="1rem 0" textAlign="center">
            Login
          </MediumHeaderDark>
          <RegularText textAlign="center" fontWeight="400">
            To Login, input the details you registered with
          </RegularText>
          <LoginForm />
        </Container>
      </Wrapper>
    </>
  );
}
