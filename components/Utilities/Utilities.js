import styled from "styled-components";

export const Divider = styled.div`
  padding: ${({ topBottom }) => topBottom || 0}
    ${({ leftRight }) => leftRight || 0};
  ${({ ...props }) => props}

  @media (max-width: 1060px) {
    flex: ${({ mdFlex }) => mdFlex};
  }

  @media (max-width: 600px) {
    width: ${({ mobileWidth }) => mobileWidth};
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "none"};
  gap: ${({ gap }) => gap || 0};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  width: ${({ width }) => width};
  align-self: ${({ alignSelf }) => alignSelf} @media (max-width: 900px) {
    flex-wrap: ${({ mdWrap, flexWrap }) => mdWrap || flexWrap};
    justify-content: ${({ mdJContent, justifyContent }) =>
      mdJContent || justifyContent};
  }

  @media (max-width: 600px) {
    flex-direction: ${({ mobileDirection }) => mobileDirection || "column"};
    gap: ${({ mobileGap, gap }) => mobileGap || gap};
    justify-content: ${({ mobileJContent, mdJContent, justifyContent }) =>
      mobileJContent || mdJContent || justifyContent || "none"};
    width: ${({ mobileWidth }) => mobileWidth};
  }
`;

export const Blob = styled.div`
  height: 0.5rem;
  width: 20%;
  background: ${({ theme, color }) => color || theme.secondary};
  border-radius: 3rem;
`;

export const LineDivider = styled.hr`
  background: #efefef;
  width: 100%;
  height: 0.1rem;
  border: none;
  margin: 2.5rem 0;
`;
