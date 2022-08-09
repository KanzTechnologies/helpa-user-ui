import styled from 'styled-components'

export const HeroSection = styled.section`
  background: url(${({bgImage}) => bgImage});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  padding: 3rem 3rem;
`

export const PageSection = styled.section`
  background: url(${({bgImage}) => bgImage}), ${({ theme, color }) => color || theme.body};
  padding: ${({topBottom}) => topBottom || '3rem'} ${({leftRight}) => leftRight || '3rem'};
  background-size: ${({bgSize}) => bgSize};
  background-repeat: ${({bgRepeat}) => bgRepeat};
  background-position: ${({bgPosition}) => bgPosition};
  ${({...props}) => props}

  @media (max-width: 1200px){
    padding: ${({laptopTopBottom}) => laptopTopBottom || '3rem'} ${({laptopLeftRight}) => laptopLeftRight || '3rem'};
  }

  @media (max-width: 1000px){
    padding: ${({mdTopBottom}) => mdTopBottom || '3rem'} ${({mdLeftRight}) => mdLeftRight || '3rem'};
  }

  @media (max-width: 600px){
    padding: ${({mobileTopBottom}) => mobileTopBottom || '3rem'} ${({mobileLeftRight}) => mobileLeftRight || '3rem'};
  }
`