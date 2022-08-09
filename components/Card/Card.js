import styled from 'styled-components'

export const CardContainer = styled.div`
  padding-bottom: 1rem;
  background: ${({ theme, color }) => color || theme.body};
  border-radius: .3rem;
  box-shadow: ${({ shadow }) => shadow || '0px 0px 3px 0px rgba(0,0,0,0.4)' };
  border: ${({border}) => border || 'initial'};
  width: ${({width}) => width};
  margin: ${({margin}) => margin};
  padding: ${({padding}) => padding};

  @media (max-width: 900px){
    width: ${({mdWidth}) => mdWidth};
  }

  @media (max-width: 600px){
    width: ${({mobileWidth}) => mobileWidth || 'min-content'};
    display: ${({mobileDisplay}) => mobileDisplay};
    margin: ${({mobileMargin}) => mobileMargin};
  }
`

export const CardOutline = styled.div`
  padding: 3rem 1rem;
  background: ${({ theme }) => theme.body};
  border: none;
  width: ${({ width }) => width};

  @media (max-width: 600px){
    width: auto;
  }
`

export const CardImage = styled.div`
  object-fit: ${({ imageFit }) => imageFit || 'cover'};;
  object-position: center;
`

export const CardNameTag = styled.h5`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`

export const CardTitle = styled.h5`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  text-align: ${({textAlign}) => textAlign || 'initial'}
`

export const CardDescription = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textAccent};
  text-align: ${({textAlign}) => textAlign || 'initial'};
  margin-bottom: 1rem;
`

export const CardDate = styled(CardNameTag)`
  font-size: 1.2rem;
`

export const CardAmount = styled.p`
  font-size: 1rem;
  color: #1D5F7D;
`
