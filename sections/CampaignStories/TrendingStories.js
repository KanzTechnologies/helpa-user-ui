import { CardContainer, CardDate, CardDescription, CardImage, CardTitle } from '@components/Card/Card'
import { Image } from '@components/Image/Image'
import { Divider, Flex } from '@components/Utilities/Utilities'
import React from 'react'

export const TrendingStories = () => {
  return (
    <Divider leftRight='6rem' topBottom='2rem'>
      <Flex flexDirection='column' justifyContent='center'>
        <CardContainer width='80%' margin='2rem 0' padding='3rem'>
          <Flex gap='3rem' mobileDirection='row' alignItem='flex-start' justifyContent='center'>
            <CardImage imageFit='contain'>
              <Image src='/images/png/trending user.png' alt='user story' />
            </CardImage>
            <Divider>
              <CardTitle>
                Helpa Family, Thank you for saving my live!
              </CardTitle>
              <CardDescription>
                From the family of Mutiat Adebisi, we say a big thank you everyone who helped in the fundraisng of our daughters brain tumor. Over 1k+ helpas people donated to save  Adebisi.
              </CardDescription>
              <CardDate>
                Feburary 15, 2022
              </CardDate>
            </Divider>
          </Flex>
        </CardContainer>
        <CardContainer width='80%' margin='2rem 0' padding='3rem'>
          <Flex>
            <CardImage imageFit='contain'>
              <Image src='/images/png/trending user.png' alt='user story' />
            </CardImage>
            <Divider>
              <CardTitle>
                Helpa Family, Thank you for saving my live!
              </CardTitle>
              <CardDescription>
                From the family of Mutiat Adebisi, we say a big thank you everyone who helped in the fundraisng of our daughters brain tumor. Over 1k+ helpas people donated to save  Adebisi.
              </CardDescription>
              <CardDate>
                Feburary 15, 2022
              </CardDate>
            </Divider>
          </Flex>
        </CardContainer>
        <CardContainer width='80%' margin='2rem 0' padding='3rem'>
          <Flex>
            <CardImage imageFit='contain'>
              <Image src='/images/png/trending user.png' alt='user story' />
            </CardImage>
            <Divider>
              <CardTitle>
                Helpa Family, Thank you for saving my live!
              </CardTitle>
              <CardDescription>
                From the family of Mutiat Adebisi, we say a big thank you everyone who helped in the fundraisng of our daughters brain tumor. Over 1k+ helpas people donated to save  Adebisi.
              </CardDescription>
              <CardDate>
                Feburary 15, 2022
              </CardDate>
            </Divider>
          </Flex>
        </CardContainer>
      </Flex>
    </Divider>
  )
}
