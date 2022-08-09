import React from 'react'
import { PageSection } from '@components/Section/Section'
import { Divider, Flex } from '@components/Utilities/Utilities'
import Button from '@components/Button/Button'
import { MediumHeaderDark, RegularText } from '@components/Typography/Typography'

const Ad = () => {
  return (
    <PageSection
      bgImage='/images/png/ad-background.png'
      bgPosition='center'
    >
      <Flex justifyContent='space-between' mobileDirection='row' >
        <Divider>
          <MediumHeaderDark color='white'>
            Invest In Gold And Other Precious Metals.
          </MediumHeaderDark>
          <RegularText color='white'>
            Increase your wealth with <span style={{ color: '#0C96C4'}}>Kanz</span> investment
          </RegularText>
        </Divider>
        <Button color='white' textColor='#100C2A'>Learn More</Button>
      </Flex>
    </PageSection>
  )
}

export default Ad
