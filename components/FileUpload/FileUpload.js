import styled from "styled-components"

export const FilePlaceholder = styled.div`
  background: rgba(12, 150, 196, 0.08);
  width: ${({ width }) => width};
  height: 15rem;
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2E2E2E; 
  border: 1px dashed rgba(119, 126, 144, 0.8);
  border-radius: 1rem;


  @media (max-width:600px){
    width: ${({ mobileWidth }) => mobileWidth};
    margin-inline: auto;
  }
`