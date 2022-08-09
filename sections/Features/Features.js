import React from 'react'
import { PageSection } from '@components/Section/Section'
import { MediumHeaderDark, RegularText } from '@components/Typography/Typography'
import { Flex } from '@components/Utilities/Utilities'
import { CardOutline, CardTitle } from '@components/Card/Card'
import { Icon } from '@components/Icon/Icon'

const Features = () => {
  return (
    <PageSection leftRight='16rem' laptopLeftRight='6rem' mdLeftRight='3rem' mdLeftRight='4rem' >
      <MediumHeaderDark textAlign='center'>
        We are leaders in  African fundraising
      </MediumHeaderDark>
      <Flex justifyContent='center' gap='6rem' flexWrap='wrap'>
        <CardOutline width='26%'>
          <Flex flexDirection='column' justifyContent='center'>
            <Icon src='/images/svg/easy setup.svg' alt='Easy setup'/>
            <CardTitle>Easy Setup</CardTitle>
            <RegularText textAlign='center'>Create your account directly as a person or organisation and add your basic info.</RegularText>
          </Flex>
        </CardOutline>
        <CardOutline width='26%'>
          <Flex flexDirection='column' justifyContent='center'>
            <Icon src='/images/svg/social reach.svg' alt= 'social reach' />
            <CardTitle>Social Reach</CardTitle>
            <RegularText textAlign='center'>Spread your campaign and get more support from people on social media.</RegularText>
          </Flex>
        </CardOutline>
        <CardOutline width='26%'>
          <Flex flexDirection='column' justifyContent='center'>
            <Icon src='/images/svg/dual advantage.svg' alt='dual advantage' />
            <CardTitle>Dual Advantage</CardTitle>
            <RegularText textAlign='center'>Create more than one campaign at a time and promote them simultenously.</RegularText>
          </Flex>
        </CardOutline>
        <CardOutline width='26%'>
          <Flex flexDirection='column' justifyContent='center'>
            <Icon src='/images/svg/safe and secure.svg' alt='safe and secure' />
            <CardTitle>Safe and Secure</CardTitle>
            <RegularText textAlign='center'>Create more than one campaign at a time and promote them simultenously.</RegularText>
          </Flex>
        </CardOutline>
        <CardOutline width='26%'>
          <Flex flexDirection='column' justifyContent='center'>
            <Icon src='/images/svg/monitoring.svg' alt='Monitoring' />
            <CardTitle>Convenient Monitoring</CardTitle>
            <RegularText textAlign='center'>Our mobile view makes it easy for fundraiser to be able to monitor campaign performance.</RegularText>
          </Flex>
        </CardOutline>
        <CardOutline width='26%'>
          <Flex flexDirection='column' justifyContent='center'>
            <Icon src='/images/svg/expert.svg' alt='expert advice' />
            <CardTitle>Expert Advice</CardTitle>
            <RegularText textAlign='center'>Our customer care service is available for quick enquires and expert advice.</RegularText>
          </Flex>
        </CardOutline>
      </Flex>
    </PageSection>
  )
}

export default Features
