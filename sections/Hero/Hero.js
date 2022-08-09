import Button from '@components/Button/Button'
import { HeroSection } from '@components/Section/Section'
import { LargeHeader, MediumHeader } from '@components/Typography/Typography'
import { Divider } from '@components/Utilities/Utilities'
import React from 'react'

function Hero() {
  return (
   <HeroSection bgImage='/images/png/hero-image.png'>
     <LargeHeader width={'18ch'}>
      Save A Soul, Give Happiness Today
     </LargeHeader>
     <MediumHeader fontWeight={'normal'}>
      Get help, Give help in 5 minutes.
     </MediumHeader >
     <Divider topBottom={'3rem'}>
        <Button>
          Donate to Needy
        </Button>
     </Divider>
   </HeroSection>
  )
}

export default Hero
