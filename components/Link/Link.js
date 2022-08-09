import styled from 'styled-components'

export const AppLink = styled.a`
  text-decoration: none;
  color: ${({theme}) => theme.primary};
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin: ${({margin}) => margin}
`

export const BadgeLink = styled(AppLink)`
  padding: 1rem 1rem;
  background: rgba(12, 150, 196, 0.07);
  border-radius: 1.5rem;
`