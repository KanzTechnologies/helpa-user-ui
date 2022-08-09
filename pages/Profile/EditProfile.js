import React from 'react'
import Head from 'next/head'
import { PageSection } from '@components/Section/Section'
import { MediumHeaderDark, RegularText } from '@components/Typography/Typography'
import { Divider, Flex, LineDivider } from '@components/Utilities/Utilities'
import { Image } from '@components/Image/Image'
import { AppLink } from '@components/Link/Link'
import Button from '@components/Button/Button'
import UserHeader from '@sections/Header/UserHeader'

const EditProfile = () => {
  return (
    <>
      <Head>
        <title>Helpa - Edit Profile</title>
        <meta name="description" content="Donate and raise funds easily with Helpa" />
        <link rel="icon" href="/images/png/favicon.png" />
      </Head>
      <UserHeader />
      <PageSection topBottom='3rem' leftRight='25rem' mobileLeftRight='3rem' >
        <MediumHeaderDark>My Profile</MediumHeaderDark>
        <Flex justifyContent='flex-start'>
          <Image src='/images/png/imgupload.png' alt='profile image' />
        </Flex>
        <Flex justifyContent='space-between' mobileDirection='row'>
          <Divider>
            <RegularText>Contact Person First Name</RegularText>
            <RegularText>Johnson</RegularText>
          </Divider>
          <AppLink>Edit</AppLink>
        </Flex>
        <LineDivider />
        <Flex justifyContent='space-between' mobileDirection='row'>
          <Divider>
            <RegularText>Contact Person Last Name</RegularText>
            <RegularText>Johnson</RegularText>
          </Divider>
          <AppLink>Edit</AppLink>
        </Flex>
        <LineDivider />
        <Flex justifyContent='space-between' mobileDirection='row'>
          <Divider>
            <RegularText>Contact Person Phone Number</RegularText>
            <RegularText>08138219292</RegularText>
          </Divider>
          <AppLink>Edit</AppLink>
        </Flex>
        <LineDivider />
        <Flex justifyContent='space-between' mobileDirection='row'>
          <Divider>
            <RegularText>Contact Person BVN</RegularText>
            <RegularText>3218219292</RegularText>
          </Divider>
          <AppLink>Edit</AppLink>
        </Flex>
        <LineDivider />
        <Flex justifyContent='space-between' mobileDirection='row'>
          <Divider>
            <RegularText>Company Name</RegularText>
            <RegularText>Requiem Plc</RegularText>
          </Divider>
          <AppLink>Edit</AppLink>
        </Flex>
        <LineDivider />
        <Flex justifyContent='flex-start' mobileDirection='row'>
          <Divider>
            <RegularText>Company Email</RegularText>
            <RegularText>jonnyg@equiem.com</RegularText>
          </Divider>
          {/* <AppLink>Edit</AppLink> */}
        </Flex>
        <LineDivider />
        <Flex justifyContent='space-between' mobileDirection='row'>
          <Divider>
            <RegularText>Company Address</RegularText>
            <RegularText>Requiem Plc</RegularText>
          </Divider>
          <AppLink>Edit</AppLink>
        </Flex>
        <LineDivider />
        <Flex justifyContent="end">
          <Button borderRadius='3rem'>Save Changes</Button>
        </Flex>
      </PageSection>
    </>
  )
}

export default EditProfile
