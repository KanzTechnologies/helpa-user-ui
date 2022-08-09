import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  body: '#fff',
  bodyAccent: 'rgba(12, 150, 196, 0.05)',
  text: '#100C2A',
  textAccent: 'rgba(16, 12, 42, 0.8)',
  dull: 'rgba(255, 255, 255, 0.85)',
  grey: '#F0F0F0',
  primary: '#0C96C4',
  secondary: '#F69D25',
  gray: '#777E90',

}

export const GlobalStyles = createGlobalStyle`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.50s linear;
`