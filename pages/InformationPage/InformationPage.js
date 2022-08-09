import React from 'react'
import Head from 'next/head'
import Header from '@sections/Header/Header'
import { PageSection } from '@components/Section/Section'
import { LargeHeader, LargeHeaderDark, MediumHeaderDark, LargeRegularText, RegularText } from '@components/Typography/Typography'
import { Image } from '@components/Image/Image'
import { Divider, Flex } from '@components/Utilities/Utilities'
import { CardContainer, CardOutline } from '@components/Card/Card'
import Button from '@components/Button/Button'
import CTA from '@sections/CTA/CTA'
import Footer from '@components/Footer/Footer'

const InformationPage = () => {
  return (
    <>
       <Head>
        <title>Helpa - How it works</title>
        <meta name="description" content="Donate and raise funds easily with Helpa" />
        <link rel="icon" href="/images/svg/helpa.svg" />
      </Head>
      <Header />
      <PageSection>
        <LargeHeaderDark textAlign='center'>
          How Helpa works
        </LargeHeaderDark>
        <MediumHeaderDark textAlign='center'>
          Helpa is the  best place for africans whether individual or organisation to fundraise.
        </MediumHeaderDark>
        <Image src='/images/png/info-illustration.png' alt='illustration' />
      </PageSection>
      <PageSection>
        <Flex alignItems='flex-start' gap='3rem' justifyContent='center'>
          <CardOutline>
            <Image src='/images/png/step 1.png' alt='illustration' />
            <RegularText>
              Start your campaign
            </RegularText>
          </CardOutline>
          <CardOutline>
            <Image src='/images/png/step 2.png' alt='illustration' />
            <RegularText>
              Upload your information
            </RegularText>
          </CardOutline>
          <CardOutline>
            <Image src='/images/png/step 3.png' alt='illustration' />
            <RegularText>
              Share your campaign online
            </RegularText>
          </CardOutline>
          <CardOutline>
            <Image src='/images/png/step 4.png' alt='illustration' />
            <RegularText>
              Recieve Donation
            </RegularText>
          </CardOutline>
          <CardOutline>
            <Image src='/images/png/step 5.png' alt='illustration' />
            <RegularText>
              Withdraw donation
            </RegularText>
          </CardOutline>
        </Flex>
      </PageSection>
      <PageSection color='#100c2a5c' leftRight='36rem' mdLeftRight='25rem' mobileLeftRight='3rem'>
        <LargeRegularText textAlign='center' fontWeight='bold'>
          Testimonial
        </LargeRegularText>
        <MediumHeaderDark textAlign='center'>
          What People Are Saying
        </MediumHeaderDark>
        <RegularText textAlign='center'>
          My son Abdulkareem was left paralysed for over 4 years because we couldnt afford his surgery fees. I heard about helpa from a friend and I registered with the hope of getting  people to donate for my sons surgical fees. In less than 2 months, the donation was completed and sent to the hospital.
        </RegularText>
        <Image src='/images/png/member.png' alt='member' style={{ display: 'block', marginInline: 'auto' }} />
        <LargeRegularText textAlign='center' fontWeight='bold'>
          Olayinka Sattarov
        </LargeRegularText>
        <RegularText textAlign='center'>
          Campaigner
        </RegularText>
      </PageSection>]
      <PageSection leftRight='6rem' mdLeftRight='3rem'>
        <Flex alignItems='flex-start' justifyContent='space-between'>
          <LargeHeaderDark fontWeight='normal'>Country Statistics</LargeHeaderDark>
          <Image src='/images/png/tabs.png' alt='tab button' />
        </Flex>
        <Image src='/images/png/map.png' alt='map' style = {{ margin: '3rem auto', display: 'block' }} />
        <Flex alignItems='flex-start' justifyContent='space-between'>
          <Divider>
            <RegularText>
              10,000,000 Donors + 20,000,000 Fundraisers from over 700 African <br /> Countries in the year 2021.
            </RegularText>
          </Divider>
          <Button>Start Fundraising</Button>
        </Flex>
      </PageSection>
      <PageSection color='#0c96c433' leftRight='6rem' mdLeftRight='3rem'>
        <MediumHeaderDark textAlign='center'>Pricing Plans</MediumHeaderDark>
        <Flex gap='3rem' justifyContent='center'>
          <CardContainer color='transparent' padding='2rem 3rem' shadow='none' border='1px solid #0C96C4'>
            <RegularText fontWeight='bold' textAlign='center'>Platform Fees</RegularText>
            <RegularText textAlign='center'>We charge only 5% to maintain your helpas account</RegularText>
            <Flex alignItems='center' gap='1rem' justifyContent='center'>
              <MediumHeaderDark>5%</MediumHeaderDark>
              <RegularText>per campaign</RegularText>
            </Flex>
          </CardContainer>
          <CardContainer color='transparent' padding='2rem 3rem' shadow='none' border='1px solid #0C96C4'>
            <RegularText fontWeight='bold' textAlign='center'>Local Payment Processing</RegularText>
            <RegularText textAlign='center'>We charge 1.5% to process local payment</RegularText>
            <Flex alignItems='center' gap='1rem' justifyContent='center'>
              <MediumHeaderDark>1.5%</MediumHeaderDark>
              <RegularText>per donation</RegularText>
            </Flex>
          </CardContainer>
          <CardContainer color='transparent' padding='2rem 3rem' shadow='none' border='1px solid #0C96C4'>
            <RegularText fontWeight='bold' textAlign='center'>International  Payment Processing</RegularText>
            <RegularText textAlign='center'>We charge 3% to process international payment</RegularText>
            <Flex alignItems='center' gap='1rem' justifyContent='center'>
              <MediumHeaderDark>3%</MediumHeaderDark>
              <RegularText>per donation</RegularText>
            </Flex>
          </CardContainer>
        </Flex>
      </PageSection>
      <CTA />
      <Footer />
    </>
  )
}

export default InformationPage
