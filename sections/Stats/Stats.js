import { PageSection } from '@components/Section/Section'
import { Image } from '@components/Image/Image'
import { Flex } from '@components/Utilities/Utilities'
import { LargeRegularText } from '@components/Typography/Typography'
import React from 'react'


const Stats = () => {
  return (
    <PageSection>
      <Flex justifyContent='space-evenly'>
        <Flex flexDirection='column' gap='1rem'>
          <Image src='/images/png/50k.png' alt='stats' />
          <LargeRegularText>
            Fundraisers
          </LargeRegularText>
        </Flex>
        <Flex flexDirection='column' gap='1rem'>
          <Image src='/images/png/32m.png' alt='stats' />
          <LargeRegularText>
            Donations
          </LargeRegularText>
        </Flex>
        <Flex flexDirection='column' gap='1rem'>
          <Image src='/images/png/10k.png' alt='stats' />
          <LargeRegularText>
            Success Stores
          </LargeRegularText>
        </Flex>
        <Flex flexDirection='column' gap='1rem'>
          <Image src='/images/png/15k.png' alt='stats' />
          <LargeRegularText>
            Fundraising Campaigns
          </LargeRegularText>
        </Flex>
      </Flex>
    </PageSection>
  )
}

export default Stats
