import DropDown, {
  DropDownItems,
  DropDownList,
} from "@components/DropDown/DropDown";
import { BadgeLink } from "@components/Link/Link";
import {
  MediumHeaderDark,
  RegularText,
} from "@components/Typography/Typography";
import React, { useMemo, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";
import IndividualRegisterForm from "./Individual/RegisterForm";
import NGORegisterForm from "./NGO/RegisterForm";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 500px;
  margin: 4rem auto;
`;

const StepContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
`;

const StepRectangle = styled.div`
  height: 7px;
  width: 48px;
  border-radius: 4px;
  background: #f69d25;
  margin-right: 8px;
`;

const ReasonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const iconStyles = {
  margin: "-0.3rem 1rem",
  display: "inline-block",
};

const dropdownOptions = [
  { value: "personalCause", label: "Personal Cause" },
  { value: "NGO", label: "NGO" },
];

export default function Register() {
  const [dropdownValue, setDropdownValue] = useState(dropdownOptions[0]);

  const content = useMemo(() => {
    switch (dropdownValue.value) {
      case "personalCause":
        return (
          <>
            <IndividualRegisterForm />
          </>
        );
      case "NGO":
        return (
          <>
            <NGORegisterForm />
          </>
        );
      default:
        return null;
    }
  }, [dropdownValue]);

  return (
    <>
      <Wrapper>
        <Container>
          <MediumHeaderDark>Register</MediumHeaderDark>
          <StepContainer>
            <StepRectangle />
            <RegularText>Step 1 of 3</RegularText>
          </StepContainer>
          <ReasonContainer>
            <RegularText margin="0 0.9rem 0 0" fontWeight="600" fontSize="18px">
              I am raising funds for
            </RegularText>
            <BadgeLink>
              <DropDown
                label={
                  <>
                    {dropdownValue.label}
                    <FiChevronDown style={iconStyles} />
                  </>
                }
                top="28%"
              >
                <DropDownItems>
                  {dropdownOptions.map((option, index) => (
                    <DropDownList
                      key={index}
                      onClick={() => setDropdownValue(option)}
                    >
                      {option.label}
                    </DropDownList>
                  ))}
                </DropDownItems>
              </DropDown>
            </BadgeLink>
          </ReasonContainer>
          {content}
        </Container>
      </Wrapper>
    </>
  );
}
