import Button from '@components/Button/Button'
import { Image } from '@components/Image/Image'
import { Nav, NavItems, NavLink, NavList } from '@components/Navigation/Navigation'
import { Flex } from '@components/Utilities/Utilities'
import React from 'react'
import { HeaderWrapper } from './Header'
import { BiBell } from "react-icons/bi";
import { IconWrapper } from '@components/Icon/Icon'

const iconStyles = {
    color:'#0C96C4', 
    fontSize: '2rem', 
    position: 'absolute',
    top: '0.6rem',
    left: '0.6rem',
}

const UserHeader = () => {
  return (
    <HeaderWrapper>
      <Flex gap='3rem' mobileDirection='row'>
        <Image src='/images/png/helpa logo.png' alt='logo' />
        <Nav>
          <NavItems>
            <NavList>
              <NavLink>
                Profile
              </NavLink>
            </NavList>
            <NavList>
              <NavLink>
                Comments
              </NavLink>
            </NavList>
            <NavList>
              <NavLink>
                Campaign
              </NavLink>
            </NavList>
            <NavList>
              <NavLink>
                Donation
              </NavLink>
            </NavList>
            <NavList>
              <NavLink>
                Analytics
              </NavLink>
            </NavList>
          </NavItems>
        </Nav>
      </Flex>
      <Nav>
        <Flex gap='1.5rem' >
          <IconWrapper borderColor='#F69D25'>
            <BiBell style={iconStyles} />
          </IconWrapper>
          <Button color='#EFEFEF' textColor='#2E2E2E' borderRadius='3rem'>
            <Flex gap="1rem">
              <Image src='/images/png/avatar.png' alt='avatar'  />
              Fundraiser
            </Flex>
          </Button>
        </Flex>
      </Nav>
    </HeaderWrapper>
  )
}

export default UserHeader
