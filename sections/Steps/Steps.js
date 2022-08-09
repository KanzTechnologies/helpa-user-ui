import Button from '@components/Button/Button'
import { CardDescription } from '@components/Card/Card'
import { Image } from '@components/Image/Image'
import { Icon } from '@components/Icon/Icon'
import { PageSection } from '@components/Section/Section'
import { MediumHeaderDark, RegularText, LargeRegularText } from '@components/Typography/Typography'
import { Divider, Flex } from '@components/Utilities/Utilities'
import React from 'react'


const Steps = () => {
  return (
    <PageSection color='rgba(12, 150, 196, 0.05)' leftRight='6rem'>
      <MediumHeaderDark textAlign='center'>
        Ways to increase your online donation as a fundraiser
      </MediumHeaderDark>
      <Flex justifyContent='center' gap='3rem'>
        <RegularText
          color='rgba(16,12,42,0.8)'
        >
          Start a campaign
        </RegularText>
        <RegularText
          color='rgba(16,12,42,0.8)'
        >
          Add a picture
        </RegularText>
        <RegularText
          color='rgba(16,12,42,0.8)'
        >
          Introduce yourself
        </RegularText>
        <RegularText
          color='rgba(16,12,42,0.8)'
        >
          Use relevant hashtags
        </RegularText>
        <RegularText
          color='rgba(16,12,42,0.8)'
        >
          Share campaign link
        </RegularText>
      </Flex>
      <Divider topBottom='3rem'>
        <Flex justifyContent='center' gap='4rem' alignItems='flex-start' flexWrap='initial'>
          <Image src='/images/png/fundraiser.png' alt='fundraiser' width='35%' mdWidth='40%' mobileWidth='90%'  mobileMargin='0 auto' />
          <Divider leftRight='4rem' style={{ flex: '0 0 50%' }}>
            <LargeRegularText>
              Use smart campaign template available to all fundraiser to increase your donation turnout.
            </LargeRegularText>
            <CardDescription>
              Create simple, conversion to optimize donation campaign.
            </CardDescription>
            <Divider topBottom='2rem'>
              <Flex mobileDirection='row' gap='1rem'>
                <Icon src='/images/svg/winter icon.svg' alt='winter flake' />
                <RegularText
                  color='rgba(16,12,42,0.8)'
                  style={{margin: '1rem 0'}}
                >
                  Match your pictures with your campaign objective
                </RegularText>
              </Flex>
              <Flex mobileDirection='row' gap='1rem'>
                <Icon src='/images/svg/winter icon.svg' alt='winter flake' />
                <RegularText
                  color='rgba(16,12,42,0.8)'
                  style={{margin: '1rem 0'}}
                >
                  Offer multiple currencies and payment options
                </RegularText>
              </Flex>
              <Flex mobileDirection='row' gap='1rem'>
                <Icon src='/images/svg/winter icon.svg' alt='winter flake' />
                <RegularText
                  color='rgba(16,12,42,0.8)'
                  style={{margin: '1rem 0'}}
                >
                  Add relevant hashtags to your campaign intro
                </RegularText>
              </Flex>
              <Flex mobileDirection='row' gap='1rem'>
                <Icon src='/images/svg/winter icon.svg' alt='winter flake' />
                <RegularText
                  color='rgba(16,12,42,0.8)'
                  style={{margin: '1rem 0'}}
                >
                  Add donation amount and set campaign duration 
                </RegularText>
              </Flex>
              <Flex mobileDirection='row' gap='1rem'>
                <Icon src='/images/svg/winter icon.svg' alt='winter flake' />
                <RegularText
                  color='rgba(16,12,42,0.8)'
                  style={{margin: '1rem 0'}}
                >
                  Follow the free template guide provided
                </RegularText>
              </Flex>
              <Button
                style={{margin: '1.5rem 0'}}
                mobileMargin='1.5rem auto'
              >Start Fundraising</Button>
            </Divider>
          </Divider>
        </Flex>
      </Divider>
    </PageSection>
  )
}

export default Steps
