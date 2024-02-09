import React from "react";
import Head from "next/head";
import UserHeader from "@sections/Header/UserHeader";
import { PageSection } from "@components/Section/Section";
import Footer from "@components/Footer/Footer";
import { CardContainer } from "@components/Card/Card";
import { Flex, Divider } from "@components/Utilities/Utilities";
import InputField, { Label } from "@components/InputField/InputField";
import Button from "@components/Button/Button";
import DropDown, {
  DropDownItems,
  DropDownList,
} from "@components/DropDown/DropDown";
import { RegularText } from "@components/Typography/Typography";
import { FiChevronDown } from "react-icons/fi";
import { BadgeLink } from "@components/Link/Link";

const iconStyles = {
  margin: "-0.3rem 1rem",
  display: "inline-block",
};

const CreateCampaign = () => {
  return (
    <>
      <Head>
        <title>Helpa - Create Campaign</title>
        <meta
          name="description"
          content="Donate and raise funds easily with Helpa"
        />
        <link rel="icon" href="/images/png/favicon.png" />
      </Head>
      <UserHeader />
      <PageSection color="#F8F8F8" topBottom="5rem">
        <Flex justifyContent="center" flexDirection="column">
          <CardContainer
            width="60%"
            mobileWidth="100%"
            margin="2rem 0"
            padding="3rem 3rem"
          >
            <Flex mobileDirection="row" margin="2rem 0">
              <Divider flex="0 0 20%">
                <Label>Campaign Title</Label>
              </Divider>
              <InputField
                type="text"
                placeholder="Help 14 years old Alan to undergo a successful spinal surgery"
                height="12rem"
                margin="2rem 0"
                radius=".1rem"
              />
            </Flex>
            <Flex>
              <Divider flex="0 0 20%">
                <Label>Category</Label>
              </Divider>
              <Flex gap="2rem">
                <BadgeLink>
                  <DropDown
                    label={
                      <>
                        Select a Category
                        <FiChevronDown style={iconStyles} />
                      </>
                    }
                  >
                    <DropDownItems>
                      <DropDownList>Medical</DropDownList>
                      <DropDownList>NGO</DropDownList>
                      <DropDownList>Emergency</DropDownList>
                      <DropDownList>Personal Cause</DropDownList>
                    </DropDownItems>
                  </DropDown>
                </BadgeLink>
                <BadgeLink>
                  <DropDown
                    label={
                      <>
                        Select SubCategory
                        <FiChevronDown style={iconStyles} />
                      </>
                    }
                  >
                    <DropDownItems>
                      <DropDownList>Surgery</DropDownList>
                      <DropDownList>Medical Bills</DropDownList>
                      <DropDownList>Cancer</DropDownList>
                      <DropDownList>Paralysis Attack</DropDownList>
                      <DropDownList>Accident</DropDownList>
                    </DropDownItems>
                  </DropDown>
                </BadgeLink>
              </Flex>
            </Flex>
            <Flex>
              <Divider flex="0 0 20%">
                <Label>Search Tags</Label>
              </Divider>
              <InputField
                type="text"
                placeholder=""
                margin="2rem 0"
                radius=".1rem"
                height="6rem"
              />
            </Flex>

            <Flex mobileDirection="row" justifyContent="end">
              <RegularText>
                Add 5 hashtags that suit your campaign category to help donors
                find you easily
              </RegularText>
            </Flex>
          </CardContainer>
          <Button borderRadius="3rem">Save & Continue</Button>
        </Flex>
      </PageSection>
      <Footer />
    </>
  );
};

export default CreateCampaign;
