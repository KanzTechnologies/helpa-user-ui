import React from 'react'
import Head from 'next/head'
import Header from '@sections/Header/Header'
import { HeroSection, PageSection } from '@components/Section/Section'
import Button from '@components/Button/Button'
import Link from 'next/link'
import { RiArrowLeftLine } from 'react-icons/ri'
import Campaigns from '@sections/Campaigns/Campaigns'
import CTA from '@sections/CTA/CTA'
import Footer from '@components/Footer/Footer'
import { Divider, Flex } from '@components/Utilities/Utilities'
import InputField from '@components/InputField/InputField'
import { LargeHeader, MediumHeader } from '@components/Typography/Typography'

const iconStyles = {
  margin: '-0.3rem 0rem',
  display: 'inline-block',
}


const CategoriesPage = () => {
  return (
    <>
      <Head>
        <title>Helpa - Categories</title>
        <meta name="description" content="Donate and raise funds easily with Helpa" />
        <link rel="icon" href="/images/svg/helpa.svg" />
      </Head>
      <Header />
      <HeroSection bgImage='/images/png/category.png'>
        <Link href='/'>
          <Button color='#EFEFEF' textColor='rgba(16, 12, 42, 0.8)'>
            <RiArrowLeftLine style={iconStyles} color='#0C96C4' /> 
            All Categories
          </Button>
        </Link>
        <LargeHeader width='18ch'>
          Get help with your medical fundraising
        </LargeHeader>
        <MediumHeader fontWeight='normal'>
          With helpa, you can get instant donations for your medical bills.
        </MediumHeader >
      </HeroSection>
      <PageSection>
        <InputField  placeholder='Search for fundraiser' />
      </PageSection>
      <PageSection>
        <Campaigns />
        <Campaigns />
        <Campaigns />
        <Divider topBottom='5rem'>
          <Flex justifyContent='center'>
            <Button borderRadius='3rem' color='#F69D25'>
              Load More
            </Button>
          </Flex>
        </Divider>
      </PageSection>
      <CTA />
      <Footer />
    </>
  )
}

export default CategoriesPage
