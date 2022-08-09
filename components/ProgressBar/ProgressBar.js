import styled from 'styled-components'

export const ProgressBar = styled.div`
  height: .3rem;
  width: 100%;
  position: relative;
  background: ${({ theme }) => theme.grey};
  border-radius: 5rem;

  &::after{
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.primary};
    height: 100%;
    width: ${({progressLevel}) => progressLevel}%;
    border-radius: inherit;
  }
`