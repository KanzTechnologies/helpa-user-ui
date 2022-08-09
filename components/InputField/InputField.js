import React from 'react'
import styled from 'styled-components'

export const Input = styled.input`
  height: ${({height}) => height || '4rem'};
  width: ${({width}) => width || '100%'};
  border: 1px solid #E3E3E3;
  outline: none;
  background: ${({background}) => background };
  border-radius: ${({radius}) => radius || '1rem'};
  font-family: inherit;
  padding: 1rem 1.5rem;
  text-align: ${({ textAlign }) => textAlign};
  margin: ${({margin}) => margin};
 

  &::focus{
    border: 1px solid #0C96C4;
  }

  @media (max-width: 600px){
    height: ${({mobileHeight, height}) => mobileHeight || height || '4rem'};
    width: ${({mobileWidth, width}) => mobileWidth || width ||'100%'};
  }

`


export const Label = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: .5rem;
  margin-top: 1rem;
  display: block;
`

const InputField = React.forwardRef(({...props}, ref) => {
  return (
    <Input {...props} ref={ref} autoComplete='off' />
  )
})

export default InputField
