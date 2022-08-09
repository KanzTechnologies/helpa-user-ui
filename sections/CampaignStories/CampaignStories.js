import { ButtonOutline } from '@components/Button/Button'
import { CardContainer, CardDescription, CardImage, CardTitle } from '@components/Card/Card'
import { Image } from '@components/Image/Image'
import { PageSection } from '@components/Section/Section'
import { Flex, Divider } from '@components/Utilities/Utilities'
import { MediumHeaderDark } from '@components/Typography/Typography'
import React from 'react'
import Link from 'next/link'

const CampaignStories = ({ title }) => {
  return (
    <PageSection>
       <MediumHeaderDark>
        {title}
      </MediumHeaderDark>
      <Flex flexWrap='initial' mdWrap='wrap' mdJContent='center' gap='2rem'>
        <CardContainer mdWidth='38%' mobileWidth='62.2%'>
          <CardImage>
            <Image img src='/images/png/campaign image 1.png' alt='campaign' />
          </CardImage>
          <Divider topBottom={'1.5rem'} leftRight={'1.5rem'}>
            <CardTitle textAlign='center'>
              SALIM ABODURIN
            </CardTitle>
            <CardDescription>
              With the help and love of donors on helpa, my sister survived cancer....
            </CardDescription>
            <Divider topBottom='1rem'>
              <Link href='/StoriesPage/StoriesPage' >
                <ButtonOutline style={{margin: '1.5rem auto'}} borderRadius='3rem'>
                  Read More
                </ButtonOutline>
              </Link>
            </Divider>
          </Divider>
        </CardContainer>
        <CardContainer mdWidth='38%' mobileWidth='62.2%'>
          <CardImage>
            <Image img src='/images/png/campaign image 1.png' alt='campaign' />
          </CardImage>
          <Divider topBottom={'1.5rem'} leftRight={'1.5rem'}>
            <CardTitle textAlign='center'>
              SALIM ABODURIN
            </CardTitle>
            <CardDescription>
              With the help and love of donors on helpa, my sister survived cancer....
            </CardDescription>
            <Divider topBottom='1rem'>
              <Link href='/StoriesPage/StoriesPage' >
                <ButtonOutline style={{margin: '1.5rem auto'}} borderRadius='3rem'>
                  Read More
                </ButtonOutline>
              </Link>
            </Divider>
          </Divider>
        </CardContainer>
        <CardContainer mdWidth='38%' mobileWidth='62.2%'>
          <CardImage>
            <Image img src='/images/png/campaign image 1.png' alt='campaign' />
          </CardImage>
          <Divider topBottom={'1.5rem'} leftRight={'1.5rem'}>
            <CardTitle textAlign='center'>
              SALIM ABODURIN
            </CardTitle>
            <CardDescription>
              With the help and love of donors on helpa, my sister survived cancer....
            </CardDescription>
            <Divider topBottom='1rem'>
              <Link href='/StoriesPage/StoriesPage' >
                <ButtonOutline style={{margin: '1.5rem auto'}} borderRadius='3rem'>
                  Read More
                </ButtonOutline>
              </Link>
            </Divider>
          </Divider>
        </CardContainer>
        <CardContainer mdWidth='38%' mobileWidth='62.2%'>
          <CardImage>
            <Image img src='/images/png/campaign image 1.png' alt='campaign' />
          </CardImage>
          <Divider topBottom={'1.5rem'} leftRight={'1.5rem'}>
            <CardTitle textAlign='center'>
              SALIM ABODURIN
            </CardTitle>
            <CardDescription>
              With the help and love of donors on helpa, my sister survived cancer....
            </CardDescription>
            <Divider topBottom='1rem'>
              <Link href='/StoriesPage/StoriesPage' >
                <ButtonOutline style={{margin: '1.5rem auto'}} borderRadius='3rem'>
                  Read More
                </ButtonOutline>
              </Link>
            </Divider>
          </Divider>
        </CardContainer>
      </Flex>
    </PageSection>
  )
}

export default CampaignStories
