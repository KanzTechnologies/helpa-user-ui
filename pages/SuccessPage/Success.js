import Button from '@components/Button/Button'
import { CardNameTag } from '@components/Card/Card'
import { Image } from '@components/Image/Image'
import { PageSection } from '@components/Section/Section'
import { RegularText } from '@components/Typography/Typography'
import { Flex } from '@components/Utilities/Utilities'
import React from 'react'

const Success = () => {
  return (
    <PageSection position='relative'>
      <Image src='/images/png/helpa logo.png'  alt='logo' position='absolute'  top='3%' left='3%' />
      <Flex flexDirection="column" justifyContent='center'>
        <Image src='/images/svg/status.png' alt='status' />
        <CardNameTag>Hello Bakare Saffiyah 👋</CardNameTag>
        <RegularText textAlign='center'>
         Your registration is succesful. click the button below to start creating your fundraising camapign. 
        </RegularText>
        <Button borderRadius='3rem'>Create campaign</Button>
      </Flex>
    </PageSection>
  )
}

export default Success
