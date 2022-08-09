import React from 'react'
import Head from 'next/head'
import Header from '@sections/Header/Header'
import { PageSection } from '@components/Section/Section'
import Button from '@components/Button/Button'
import Link from 'next/link'
import { RiArrowLeftLine } from 'react-icons/ri'
import { LargeHeaderDark, MediumHeaderDark } from '@components/Typography/Typography'
import { Flex } from '@components/Utilities/Utilities'
import Campaigns from '@sections/Campaigns/Campaigns'
import CTA from '@sections/CTA/CTA'
import Footer from '@components/Footer/Footer'
import Icon from '@components/Icon/Icon'

const iconStyles = {
  margin: '-0.3rem 0rem',
  display: 'inline-block',
}

const CampaignPage = () => {
  return (
    <>
       <Head>
        <title>Helpa - Campaigns</title>
        <meta name="description" content="Donate and raise funds easily with Helpa" />
        <link rel="icon" href="/images/svg/helpa.svg" />
      </Head>
      <Header />
      <PageSection>
        <Flex justifyContent='flex-start'>
          <Link href='/'>
            <Button color='#EFEFEF' textColor='rgba(16, 12, 42, 0.8)'>
              <RiArrowLeftLine style={iconStyles} color='#0C96C4' /> 
              Go Back Home
            </Button>
          </Link>
        </Flex>
        <LargeHeaderDark>
          Explore all fundraiser
        </LargeHeaderDark>
        <MediumHeaderDark fontWeight='normal'>
          People around the world are donating to a good cause. Be a happy donor.
        </MediumHeaderDark>
        <Flex justifyContent='center'>
          <Icon src='/images/svg/arrow.svg' alt='arrow down' />
        </Flex>
      </PageSection>
      <Campaigns title={'Ongoing fundraising Campaigns'} />
      <Campaigns title={'Medical Fundraisers'} />
      <Campaigns title={'Emergency Fundraisers'} />
      <Campaigns title={'Nonprofit Fundraisers'} />
      <CTA />
      <Footer />
    </>
  )
}

export default CampaignPage
