import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const ImageSection = styled.div`
  flex: 0 0 30%;
  position: relative;
  height: 100%;
  background: "black";
  background-image: url("/images/png/background-image.png");
  mix-blend-mode: darken;
  background-size: cover;
  background-position-x: 40%;
  background-position-y: bottom;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FormSection = styled.div`
  flex: 0 0 70%;
  background: ${({ theme }) => theme.body};
  padding: 2rem;
  overflow: auto;

  @media (max-width: 768px) {
    padding: 1rem;
    flex: 0 0 100%;
  }
`;

const LogoWrapper = styled.div`
  margin-top: 2rem;
  margin-left: 2rem;
`;

const TextWrapper = styled.div`
  display: flex;
  margin-top: 7rem;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  color: ${({ theme }) => theme.dull};

  @media (max-width: 1024px) {
    margin-top: 8rem;
  }
`;

const TextContainer = styled.div`
  background-color: #ffffff;
  width: 350px;
  text-align: center;
  border-radius: 16px;
  padding: 24px;

  @media (max-width: 1024px) {
    width: 300px;
    padding: 16px;
  }
`;

const TextHeader = styled.h1`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: black;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

const TextBody = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: black;

  @media (max-width: 1024px) {
    font-size: 12px;
    padding: 0 8px;
  }
`;

export default function AuthLayout({ children }) {
  return (
    <>
      <Wrapper>
        <Container>
          <ImageSection>
            <LogoWrapper>
              <Image
                src="/images/png/helpa logo.png"
                alt="Logo"
                width={80}
                height={40}
              />
            </LogoWrapper>

            <TextWrapper>
              <TextContainer>
                <TextHeader>The place to get help and happiness</TextHeader>
                <TextBody>
                  We connect donors to people who needs helping hand.
                </TextBody>
              </TextContainer>
            </TextWrapper>
          </ImageSection>
          <FormSection>{children}</FormSection>
        </Container>
      </Wrapper>
    </>
  );
}
