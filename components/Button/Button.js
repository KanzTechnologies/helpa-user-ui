import React from 'react'
import styled from 'styled-components'

const ButtonBase = styled.button`
  background: ${({ theme, color }) => color || theme.primary};
  color: ${({ theme, textColor }) => textColor || theme.body};
  padding: 1.2rem 2.5rem;
  font-size: 1.5rem;
  display: block;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || '.3rem' }};
  box-shadow: ${({ boxShadow }) => boxShadow || 'none' };
  width: ${({ width }) => width };
  margin: ${({margin}) => margin};

  @media (max-width: 600px){
    margin: ${({mobileMargin}) => mobileMargin}
  }
`

export const ButtonOutline = styled(ButtonBase)`
  background: ${({ theme }) => theme.body};
  color: ${({ theme, textColor }) => textColor || theme.secondary};
  border: 1px solid ${({ theme, border }) => border || theme.secondary};
`

export const IconButton = styled(ButtonOutline)`
  color: ${({ theme }) => theme.textAccent};
  border: 1px solid ${({ theme }) => theme.textAccent};
  border-radius: 5rem;
  padding: .5rem 1rem;
  position: relative;
`


const Button = React.forwardRef(({ children,  ...props }, ref) => {
  return (
    <ButtonBase {...props} ref={ref}>
      {children}
    </ButtonBase>
  )
})

export default Button
