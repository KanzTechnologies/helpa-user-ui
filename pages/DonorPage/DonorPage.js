import {useState} from 'react'
import { PageSection } from '@components/Section/Section'
import { Divider, Flex, LineDivider } from '@components/Utilities/Utilities'
import { CardContainer, CardDescription, CardTitle } from '@components/Card/Card'
import Button, { ButtonOutline } from '@components/Button/Button'
import { AiOutlineLeft } from "react-icons/ai";
import DonorHeader from '@sections/Header/DonorHeader'
import Head from 'next/head'
import { RegularText } from '@components/Typography/Typography'
import InputField, { Label } from '@components/InputField/InputField'
import { Image } from '@components/Image/Image'
import { BadgeLink } from '@components/Link/Link'
import { FiChevronDown } from 'react-icons/fi'
import RangeBar from '@components/RangeBar/RangeBar'

const iconStyles = {
  margin: '-0.3rem .5rem',
  display: 'inline-block', 
  fontWeight: 'normal',
  fontSize: '1.5rem',
}

const DonorPage = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Head>
        <title>Helpa - Donate to User</title>
        <meta name="description" content="Donate and raise funds easily with Helpa" />
        <link rel="icon" href="/images/png/favicon.png" />
      </Head>
      <DonorHeader />
      <PageSection color='#F8F8F8' leftRight='8rem' topBottom='4rem'>
        <Flex alignItems='flex-start' justifyContent='center' gap='4rem'>
          
          <CardContainer padding='3rem 3rem 2rem 4rem'>
            <ButtonOutline textColor='#100C2A' border='#777E90' margin='1rem 0'>
              <AiOutlineLeft style={iconStyles} />
              Return to Fundraiser
            </ButtonOutline>
            <Divider topBottom='2rem'>
              <Flex gap='2rem'>
                <Image src='/images/png/donor.png' alt='patient' />
                <Divider>
                  <Flex mobileDirection='row' alignItems='baseline' gap='.5rem'>
                    <RegularText>You are donating to </RegularText><CardTitle>Support for the Adeshola family</CardTitle>
                  </Flex>
                  <Flex mobileDirection='row' alignItems='baseline' gap='.5rem'>
                    <RegularText>Your donation will benefit</RegularText><CardTitle>Adeshola</CardTitle>
                  </Flex>
                </Divider>
              </Flex>
            </Divider>
            <Label>Enter your donation</Label>
            <InputField type='text' placeholder='#5000000' textAlign='right' margin='1rem 0' />
            
            <Divider topBottom='2rem'>
              <RegularText fontWeight='bold'>Help Helpa Grow</RegularText>
              <CardDescription>Helpa has  a 0% platform fee for maintenance and marketing. Helpa will only be able to continue to offer it free services thanks to donors who leave optional amount here: </CardDescription>
            </Divider>
            
            <Divider topBottom='2rem'>
              <Flex gap='.5rem'>
                <RegularText>0%</RegularText>
                <RangeBar min='1' max='100' />
                <RegularText>30%</RegularText>
              </Flex>
            </Divider>
            
            {show && (<>
              <LineDivider />
              <Flex mobileDirection='row' justifyContent='space-between'>
                <RegularText>Payment Method</RegularText>
                <BadgeLink>
                  Card
                  <FiChevronDown style={iconStyles}/>
                </BadgeLink>
              </Flex>
              <CardContainer shadow='none' border='1px solid rgba(119, 126, 144, 0.5)' width='80%' mobileWidth='100%' padding='3rem 3rem' mobileMargin='2rem 0'>
                <Divider topBottom='.5rem'>
                  <Label>Email Address</Label>
                  <InputField type='email' placeholder='Email Address' />
                </Divider>
                <Divider topBottom='.5rem'>
                  <Label>Full Name</Label>
                  <InputField type='text' placeholder='Full Name' />
                </Divider>
                <Divider topBottom='.5rem'>
                  <Label>Card Number</Label>
                  <InputField type='text' placeholder='Card Number' />
                </Divider>
                <Flex  mobileDirection='row'>
                  <Divider topBottom='.5rem'>
                    <Label>Valid Till</Label>
                    <InputField type='text' placeholder='MM/YY' width='40%' mobileWidth='100%' />
                  </Divider>
                  <Divider topBottom='.5rem'>
                    <Label>CVV</Label>
                    <InputField type='text' placeholder='123' width='40%' mobileWidth='100%' />
                  </Divider>
                </Flex>
                <Flex mobileDirection='row'>
                  <Divider topBottom='.5rem'>
                    <Label>Country</Label>
                    <InputField type='text' placeholder='Country' width='40%' mobileWidth='100%' />
                  </Divider>
                  <Divider topBottom='.5rem'>
                    <Label>Postal Code</Label>
                    <InputField type='text' placeholder='00000' width='40%' mobileWidth='100%' />
                  </Divider>
                </Flex>
              </CardContainer>
              <LineDivider />
            </>) }
          
          <Button onClick={()=> setShow(!show)}>{show ? 'Help': 'Continue'}</Button>
          <CardDescription>By continuing, you agree with the helpa terms and privacy policy</CardDescription>
        </CardContainer>
        
        <CardContainer width='50%' padding='2rem 2rem' mobileDisplay='none'>
          <CardTitle>Your donation </CardTitle>       
          <Flex mobileDirection='row' justifyContent='space-between' >
            <RegularText>Your donation</RegularText>
            <RegularText>#500,000</RegularText>
          </Flex>
          <Flex mobileDirection='row' justifyContent='space-between' marginTop='1rem'>
            <RegularText>Helpa Tip</RegularText>
            <RegularText>#750,000</RegularText>
          </Flex>
          <LineDivider />
          <Flex mobileDirection='row' justifyContent='space-between'>
            <RegularText>Helpa Tip</RegularText>
            <RegularText>#750,000</RegularText>
          </Flex>
        </CardContainer>

        </Flex>
      </PageSection>
    </>
  )
}

export default DonorPage
