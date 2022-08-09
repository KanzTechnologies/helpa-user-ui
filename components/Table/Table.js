import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  text-align: left;
  margin: 2rem 0;
`

export const TableRow = styled.tr`
  &:hover{
    background: ${({theme}) => theme.grey};
  }
`

export const TableHead = styled.th`
  font-size: 1.5rem;
  text-transform: capitalize;
  color: ${({theme}) => theme.text};
  padding: 1rem 0;
  border-top: 1px solid  #eaebed;
  border-bottom: 1px solid  #eaebed;
  width: ${({width}) => width};
`

export const TableBody = styled.td`
  font-size: 1.3rem;
  color: ${({theme}) => theme.textAccent};
  padding: 1rem 0;
`