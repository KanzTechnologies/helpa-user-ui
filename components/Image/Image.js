import styled from 'styled-components'

export const Image = styled.img`
  max-width: 100%;
  margin: ${({margin}) => margin}
  width: ${({width}) => width};
  ${({...props}) => props}

  @media (max-width: 900px){
    width: ${({mdWidth}) => mdWidth};
  }

  @media (max-width: 600px){
    width: ${({mobileWidth}) => mobileWidth};
    margin: ${({mobileMargin}) => mobileMargin};
    display: ${({mobileDisplay}) => mobileDisplay};
  }
`

// Image.defaultProps = {
//   src: `${({imageSrc})}`,
//   alt: `${({imageAlt})}`
// }