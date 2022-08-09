import styled from 'styled-components'

export const Nav = styled.nav`

  @media (max-width: 900px){
    display: none
  }
`

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const NavList = styled.li`
  list-style: none;
`

export const NavLink = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: ${({theme}) => theme.textAccent};
  cursor: pointer;
`