import { Image } from '@components/Image/Image'
import { PageSection } from '@components/Section/Section'
import { Divider, Flex } from '@components/Utilities/Utilities'
import React from 'react'

const UserAuth = ({children}) => {
  return (
    <PageSection topBottom='0' leftRight='0' position='relative'>
      <Image src='/images/png/helpa logo.png' alt='logo' position='absolute' top='2%' left='3%' />
      <Flex alignItems='flex-start' justifyContent='end'>
        <Image src='/images/png/userauthbackground.png' alt='background' mobileDisplay='none'  />
        <Divider flex='0 0 60%' topBottom='3rem' mobileWidth='100%'>
          <Flex justifyContent='center' flexDirection='column'>
            {children}
          </Flex>
        </Divider>
      </Flex>
    </PageSection>
  )
}

export default UserAuth
