import styled from 'styled-components'

export const IconWrapper = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  border: 1px solid ${({borderColor}) => borderColor};
  position: relative;
`

export const Icon = styled.img`
  max-width: 100%;
  width: ${({width}) => width}%;
`
// Icon.defaultProps = {
//   src: `${({imageSrc})}`,
//   alt: `${({imageAlt})}`
// }


