import React from 'react'
import Header from '@sections/Header/Header'
import Hero from '@sections/Hero/Hero'
import Campaigns from '@sections/Campaigns/Campaigns'
import Features from '@sections/Features/Features'
import Steps from '@sections/Steps/Steps'
import Stats from '@sections/Stats/Stats'
import CampaignStories from '@sections/CampaignStories/CampaignStories'
import Testimonials from '@sections/Testimonials/Testimonials'
import CTA from '@sections/CTA/CTA'
import Footer from '@components/Footer/Footer'
import Ad from '@sections/Ad/Ad'

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Campaigns title={'Ongoing fundraising Campaigns'} />
      <Features />
      <Steps />
      <Stats />
      <Ad />
      <CampaignStories title={'Successful Fundraiser Stories'} />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default HomePage
