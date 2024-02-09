import { Image } from "@components/Image/Image";
import { Divider, Flex } from "@components/Utilities/Utilities";
import React from "react";
import styled from "styled-components";
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiFacebookCircleFill,
} from "react-icons/ri";

const styles = {
  color: "#fff",
  fontSize: "2rem",
};

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.text};
  padding: 2rem;
`;

const FooterItems = styled.ul`
  display: inline-block;
`;

const FooterList = styled.li`
  list-style: none;
  margin-bottom: 1.5rem;
`;

const FooterHeadText = styled.p`
  color: ${({ theme }) => theme.body};
  font-size: 1.8rem;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.dull};
  font-size: 1.2rem;
  margin: 1.5rem 0;
  text-decoration: none;
`;

const FooterText = styled(FooterLink)`
  margin: 0;
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.bodyAccent};
  padding: 1.5rem 0;
  margin-top: 8rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Flex alignItems="flex-start" gap="20rem" mobileGap="8rem">
        <Divider flex="0 0 30%" mdFlex="0 0 20%">
          <Image src="/images/png/helpa logo.png" />
        </Divider>
        <Flex alignItems="flex-start" justifyContent="space-around" gap="8rem">
          <Divider>
            <FooterItems>
              <FooterList>
                <FooterHeadText>Fundraiser for</FooterHeadText>
              </FooterList>
              <FooterList>
                <FooterLink>Medical</FooterLink>
              </FooterList>
              <FooterList>
                <FooterLink>Emergency</FooterLink>
              </FooterList>
              <FooterList>
                <FooterLink>Nonprofit</FooterLink>
              </FooterList>
            </FooterItems>
          </Divider>
          <Divider>
            <FooterItems>
              <FooterList>
                <FooterHeadText>Learn more</FooterHeadText>
              </FooterList>
              <FooterList>
                <FooterLink>How it works</FooterLink>
              </FooterList>
              <FooterList>
                <FooterLink>Success stories</FooterLink>
              </FooterList>
              <FooterList>
                <FooterLink>Terms of service</FooterLink>
              </FooterList>
              <FooterList>
                <FooterLink>Privacy Policy</FooterLink>
              </FooterList>
              <FooterList>
                <FooterLink>Pricing & Fees</FooterLink>
              </FooterList>
            </FooterItems>
          </Divider>
          <Divider>
            <FooterItems>
              <FooterList>
                <FooterHeadText>Resources</FooterHeadText>
              </FooterList>
              <FooterList>
                <FooterLink>Help center</FooterLink>
              </FooterList>
              <FooterList>
                <FooterLink>About us</FooterLink>
              </FooterList>
              <FooterList>
                <FooterLink>Contact us</FooterLink>
              </FooterList>
            </FooterItems>
          </Divider>
        </Flex>
      </Flex>
      <FooterBottom>
        <Flex justifyContent="space-between" mobileJContent="flex-start">
          <FooterText>© 2021 Helpa All Right Reserved</FooterText>
          <Flex mobileDirection="row" gap="1rem">
            <RiInstagramFill style={styles} />
            <RiLinkedinBoxFill style={styles} />
            <RiTwitterFill style={styles} />
            <RiFacebookCircleFill style={styles} />
          </Flex>
        </Flex>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
