import styled from 'styled-components'

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  border: none;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 10px;
`;


const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  &:hover~ ${RadioLabel}{
    background: #ccc;
    &::after{
      content: '\f00c';
      font-family: 'FontAwesome';
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
  &:checked + ${Item} {
    background: yellowgreen;
    border: 2px solid yellowgreen;
  }
  &:checked + ${RadioButtonLabel} {
    background: yellowgreen;
    border: 1px solid yellowgreen;
    &::after {
      content: '\f00c';
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }

`

const RadioLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`

const RadioInput = ({...props}) => {
  return (
    <RadioButton type='radio' name='radio'  {...props} /> 
  )
}
export default RadioInput
