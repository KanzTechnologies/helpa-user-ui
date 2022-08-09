import React from 'react'
import Head from 'next/head'
import Header from '@sections/Header/Header'
import { HeroSection, PageSection } from '@components/Section/Section'
import { MediumHeader, MediumHeaderDark, RegularText } from '@components/Typography/Typography'
import { TrendingStories } from '@sections/CampaignStories/TrendingStories'
import Stories from '@sections/CampaignStories/Stories'
import CTA from '@sections/CTA/CTA'
import Footer from '@components/Footer/Footer'

const StoriesPage = () => {
  return (
    <>
      <Head>
        <title>Helpa - Success Stories</title>
        <meta name="description" content="Donate and raise funds easily with Helpa" />
        <link rel="icon" href="/images/png/favicon.png" />
      </Head>
      <Header />
      <HeroSection bgImage='/images/png/story-hero.png' style={{ padding: '15rem 3rem' }}>
        <MediumHeader fontWeight='bold' textAlign='center' >
          Helpa Stories
        </MediumHeader>
        <RegularText color='white' textAlign='center' >
          Helping fundraisers find happiness
        </RegularText>
      </HeroSection>
      <PageSection>
        <MediumHeaderDark textAlign='center'>
          Trending Success Stories
        </MediumHeaderDark>
        <TrendingStories />
      </PageSection>
      <hr style={{ background: 'rgb(12 150 196 / 45%)', width: '100%', height: '.6rem', border: 'none' }}/>
      <PageSection>
        <MediumHeaderDark>
          Recent Success Stories
        </MediumHeaderDark>
        <Stories />
      </PageSection>
      <CTA />
      <Footer />
    </>
  )
}

export default StoriesPage
