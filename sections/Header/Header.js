import styled  from 'styled-components'
import Logo from '@components/Image/Logo'
import { Nav, NavItems, NavLink, NavList } from '@components/Navigation/Navigation'
import { FiSearch, FiChevronDown } from 'react-icons/fi'
import  Button, {ButtonOutline} from '@components/Button/Button'

import DropDown, { DropDownItems, DropDownList } from '@components/DropDown/DropDown'

export const HeaderWrapper = styled.header`
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const iconStyles = {
  margin: '-0.3rem 1rem',
  display: 'inline-block'
}

const Header = () => {

  return (
    <HeaderWrapper>
      <Nav>
        <NavItems>
          <NavList>
            <NavLink>
                <FiSearch style={iconStyles} />
                Search
            </NavLink>
          </NavList>
          <NavList>
            {/* <NavLink> */}
              <DropDown
                label={<>
                      Discover
                    <FiChevronDown style={iconStyles}/> 
                  </> 
                  }
              >
                <DropDownItems>
                  <DropDownList>
                    Fundraiser
                  </DropDownList>
                  <DropDownList>
                    Success Stories
                  </DropDownList>
                  <DropDownList>
                  Other Service
                  </DropDownList>
                </DropDownItems>
              </DropDown>
            {/* </NavLink> */}
          </NavList>
          <NavList>
            {/* <NavLink> */}
            <DropDown
              label={<>
                Raisefunds For
                <FiChevronDown style={iconStyles} /> 
              </>}
            >
              <DropDownItems>
                <DropDownList>
                  Medical
                </DropDownList>
                <DropDownList>
                  Emergency
                </DropDownList>
                <DropDownList>
                  Nonprofit
                </DropDownList>
              </DropDownItems>
            </DropDown>
            {/* </NavLink> */}
          </NavList>
        </NavItems>
      </Nav>
      <Logo />
      <Nav>
        <NavItems>
          <NavList>
            <NavLink>
              <Button 
                borderRadius='3rem' 
              >
                Help Bisi
              </Button>
            </NavLink>
          </NavList>
          <NavList>
              <NavLink>
                  How It Works 
              </NavLink>
            </NavList>
            <NavList>
              <NavLink>
                  <ButtonOutline>
                    Start a Fundraiser
                  </ButtonOutline>
              </NavLink>
            </NavList>
          </NavItems>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header
