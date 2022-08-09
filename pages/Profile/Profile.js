import React from 'react'
import Head from 'next/head'
import { PageSection } from '@components/Section/Section'
import UserHeader from '@sections/Header/UserHeader'
import { Divider, Flex } from '@components/Utilities/Utilities'
import { CardContainer, CardDescription, CardTitle } from '@components/Card/Card'
import Button, { ButtonOutline } from '@components/Button/Button'
import { Image } from '@components/Image/Image'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { LargeRegularText, RegularText} from '@components/Typography/Typography'
import {  AiFillCheckCircle,AiOutlineStop, AiFillFacebook } from "react-icons/ai";
import { Icon } from '@components/Icon/Icon'
import { FaLinkedinIn } from "react-icons/fa";
// import Tabs from '@components/Tabs/Tabs'

const iconStyles ={
  color: '#0C96C4',
  fontSize: '2.5rem',
}

const buttonIconStyles ={
  color: '#ffffff',
  fontSize: '2rem',
}

const Profile = () => {
  return (
    <>
      <Head>
        <title>Helpa - Edit Profile</title>
        <meta name="description" content="Donate and raise funds easily with Helpa" />
        <link rel="icon" href="/images/png/favicon.png" />
      </Head>
      <UserHeader />
      <PageSection topBottom='4rem' leftRight='3rem' color='#F8F8F8'>
        <Flex gap="2rem"> 
          <CardContainer padding='2.5rem 2rem' width='35%' mobileWidth='100%' >
           <Flex mobileDirection='row' justifyContent='space-between'>
             <Image src='/images/png/profile avatar.png' alt='avatar' />
             <ButtonOutline border='#0C96C4' textColor='#0C96C4'>Edit</ButtonOutline>
           </Flex>
            <Flex mobileDirection='row' justifyContent='space-between'>
              <Divider topBottom='2rem'>
                <CardDescription>Email</CardDescription>
                <CardTitle>djsaffino@gmail.com</CardTitle>
              </Divider>
              <Divider topBottom='2rem'>
                <CardDescription>Name</CardDescription>
                <CardTitle>Bakare Saffiyah</CardTitle>
              </Divider>
            </Flex>
            <Flex mobileDirection='row' justifyContent='space-between'>
              <Divider topBottom='2rem'>
                <CardDescription>Phone Number</CardDescription>
                <CardTitle>134545455</CardTitle>
              </Divider>
              <Divider topBottom='2rem'>
                <CardDescription>Date of Birth</CardDescription>
                <CardTitle>33/22/11</CardTitle>
              </Divider>
            </Flex>
            <Flex mobileDirection='row' justifyContent='space-between'>
              <Divider topBottom='2rem'>
                <CardDescription>BVN</CardDescription>
                <CardTitle>2234243243</CardTitle>
              </Divider>
              <Divider topBottom='2rem'>
                <CardDescription>City</CardDescription>
                <CardTitle>Lagos, Nigeria</CardTitle>
              </Divider>
            </Flex>
            <Flex mobileDirection='row' justifyContent='space-between'>
              <Divider topBottom='2rem'>
                <CardDescription>Country of Residence</CardDescription>
                <CardTitle>Nigeria</CardTitle>
              </Divider>
              <Divider topBottom='2rem'>
                <CardDescription>Address</CardDescription>
                <CardTitle>Plot 12, Dolphin, Ikoyi </CardTitle>
              </Divider>
            </Flex>
          </CardContainer>
           {/* <Tabs>
             <Divider
              label={<RegularText textTransform='capitalize'>Active Campaign</RegularText> }
             >
              <Flex mobileDirection='row' gap='2rem'>
                <CardContainer></CardContainer>
                <CardContainer padding='3rem 3rem' width='50%'>
                  <Icon src='/images/svg/add icon.svg' alt='add icon' />
                  <RegularText>Create new Campaign</RegularText>
                </CardContainer>
              </Flex>
             </Divider>
             <Divider
              label={<RegularText textTransform='capitalize'>Cancelled Campaign</RegularText> }
             >
                hello
             </Divider>
             <Divider
              label={<RegularText textTransform='capitalize'>Completed Campaign</RegularText> }
             >
              hi
             </Divider>
           </Tabs> */}
        </Flex>
        <Divider topBottom='3rem'>
          <CardContainer padding='2.5rem 2rem' width='35%' mobileWidth='100%'>
            <Flex gap='2rem' mobileDirection='row'>
              <ProgressBar progressLevel={95} />
              <LargeRegularText>95%</LargeRegularText>
            </Flex>
            <LargeRegularText textTransform='capitalize'>your profile strength : strong</LargeRegularText>
            <Divider topBottom='2rem'>
              <Flex mobileDirection='row' justifyContent='space-between'>  
                <RegularText>Add a phone number</RegularText>
                <AiFillCheckCircle style={iconStyles}  />
              </Flex>
              <Flex mobileDirection='row' justifyContent='space-between'>  
                <RegularText>Add a profile picture</RegularText>
                <AiFillCheckCircle style={iconStyles} />
              </Flex>
              <Flex mobileDirection='row' justifyContent='space-between'>  
                <RegularText>Verify email address</RegularText>
                <AiFillCheckCircle style={iconStyles} />
              </Flex>
              <Flex mobileDirection='row' justifyContent='space-between'>  
                <RegularText>Link facebook profile</RegularText>
                <AiFillCheckCircle style={iconStyles} />
              </Flex>
              <Flex mobileDirection='row' justifyContent='space-between'>  
                <RegularText>Link linkedin profile</RegularText>
                <AiOutlineStop fontSize='2.5rem' />
              </Flex>
              <Flex mobileDirection='row' justifyContent='space-between'>  
                <RegularText>Add BVN</RegularText>
                <AiFillCheckCircle style={iconStyles} />
              </Flex>
              <Flex mobileDirection='row' justifyContent='space-between'>  
                <RegularText>Add date of birth</RegularText>
                <AiFillCheckCircle style={iconStyles} />
              </Flex>
              <Flex mobileDirection='row' justifyContent='space-between'>  
                <RegularText>Add address of residence</RegularText>
                <AiFillCheckCircle style={iconStyles} />
              </Flex>
              <Flex mobileDirection='row' justifyContent='space-between'>  
                <RegularText>Add fullname</RegularText>
                <AiFillCheckCircle style={iconStyles} />
              </Flex>
              <Flex mobileDirection='row' justifyContent='space-between'>  
                <RegularText>Add grender</RegularText>
                <AiFillCheckCircle style={iconStyles} />
              </Flex>
            </Divider>
          </CardContainer>
        </Divider>
        <CardContainer width='55%' mobileWidth='100%' padding='4rem 2.5rem'>
          <Flex mobileDirection='row' gap='2rem'>
            <Flex mobileDirection='row' gap='1rem'>
              <Icon src='/images/svg/dollar.svg' alt='dollar icon' />
              <Divider>
                <CardTitle>#500,000</CardTitle>
                <CardDescription>Donations Made</CardDescription>
              </Divider>
            </Flex>
            <Flex mobileDirection='row' gap='1rem'>
              <Icon src='/images/svg/date.svg' alt='date icon' />
              <Divider>
                <CardTitle>12/08/22</CardTitle>
                <CardDescription>Last Donation Date</CardDescription>
              </Divider>
            </Flex>
            <Flex mobileDirection='row' gap='1rem'>
              <Icon src='/images/svg/donation amount.svg' alt='amount icon' />
              <Divider>
                <CardTitle>#500,000</CardTitle>
                <CardDescription>Last Donation Amount</CardDescription>
              </Divider>
            </Flex>
          </Flex>
        </CardContainer>
        
        <Divider topBottom='2rem'>
          <CardContainer padding='5rem  3rem' width='55%' mobileWidth='100%'>
            <Flex gap='3rem' mobileDirection='row' justifyContent='center'>
              <Button color='#3B5999' borderRadius='3rem'>
                <Flex mobileDirection='row' gap='1rem'>
                <AiFillFacebook style={buttonIconStyles} />
                  Link Facebook
                </Flex>
              </Button>
              <Button borderRadius='3rem'>
              <Flex mobileDirection='row' gap='1rem'>
                <FaLinkedinIn style={buttonIconStyles} />
                Link Linkedin
                </Flex>
              </Button>
            </Flex>
          </CardContainer>
        </Divider>
      </PageSection>
    </>
  )
}

export default Profile
