import React from 'react'
import styled from 'styled-components'

export const InputRange = styled.input`
  -webkit-appearance: none;  
  background: linear-gradient(to right, green 30%, white 5%, green 30%,white 5%, green 30%, white 5%, green 30%);
  height: 1rem;
  border-radius: 3rem;
  width: 100%;
  outline: none;
  border: none;
  -webkit-appearance: none;
  -webkit-transition: .2s;
  transition: opacity .2s;

`

const RangeBar = ({min, max, name}) => {
  return (
    <InputRange max={max} min={min} name={name} />
  )
}

export default RangeBar
