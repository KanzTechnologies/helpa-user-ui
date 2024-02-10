import styled from "styled-components";

export const LargeHeader = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.dull};
  text-align: ${({ textAlign }) => (!textAlign ? "initial" : textAlign)};
  width: ${({ width }) => (!width ? "100%" : width)};
`;

export const LargeHeaderDark = styled(LargeHeader)`
  color: ${({ theme }) => theme.text};
  font-weight: ${({ fontWeight }) => (!fontWeight ? "bold" : "normal")};
`;

export const MediumHeader = styled.h3`
  font-size: 2.5rem;
  font-weight: ${({ fontWeight }) => (!fontWeight ? "bold" : "normal")};
  color: ${({ theme }) => theme.dull};
  text-align: ${({ textAlign }) => (!textAlign ? "initial" : textAlign)};
  text-transform: ${({ textTransform }) => textTransform};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const MediumHeaderDark = styled(MediumHeader)`
  color: ${({ theme, color }) => color || theme.text};
  margin: ${({ margin }) => (!margin ? "2rem 0" : margin)};
`;

export const RegularText = styled.p`
  font-size: ${({ fontSize }) => fontSize || "1.5rem"};
  color: ${({ theme, color }) => color || theme.text};
  text-align: ${({ textAlign }) => (!textAlign ? "initial" : textAlign)};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: ${({ margin }) => margin};
  cursor: ${({ cursor }) => cursor};
  width: ${({ width }) => width};

  @media (max-width: 768px) {
    font-size: ${({ mdFontSize }) => mdFontSize || "1.5rem"};
  }
`;
export const LargeRegularText = styled(RegularText)`
  font-size: 1.8rem;
  font-weight: ${({ fontWeight }) => (!fontWeight ? "bold" : "normal")};
  text-transform: ${({ textTransform }) => textTransform};
`;
