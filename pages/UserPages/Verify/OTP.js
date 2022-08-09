import Button from '@components/Button/Button'
import InputField from '@components/InputField/InputField'
import { BadgeLink } from '@components/Link/Link'
import { MediumHeaderDark, RegularText } from '@components/Typography/Typography'
import { Blob, Divider, Flex } from '@components/Utilities/Utilities'
import UserAuth from '@sections/UserAuth/UserAuth'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const OTP = () => {
  return (
    <>
      <Head>
        <title>Helpa - Verify your Helpa Account</title>
        <meta name="description" content="Donate and raise funds easily with Helpa" />
        <link rel="icon" href="/images/png/favicon.png" />
      </Head>
      <UserAuth>
          <MediumHeaderDark>
            Verify
          </MediumHeaderDark>
          <Flex mobileDirection='row' gap='1rem'>
            <Blob />
            <Blob />
            <RegularText width='25ch'>Step 2 of 3</RegularText>
          </Flex>
          <Divider topBottom='2rem'>
            <Flex justifyContent="center" flexDirection='column'>
              <Flex mobileDirection='row' gap='2rem' justifyContent='center'>
                <InputField type='text' width='8%' height='6rem' mobileHeight='5rem' mobileWidth='15%' />
                <InputField type='text' width='8%' height='6rem' mobileHeight='5rem' mobileWidth='15%' />
                <InputField type='text' width='8%' height='6rem' mobileHeight='5rem' mobileWidth='15%' />
                <InputField type='text' width='8%' height='6rem' mobileHeight='5rem' mobileWidth='15%' />
                <InputField type='text' width='8%' height='6rem' mobileHeight='5rem' mobileWidth='15%' />
                <InputField type='text' width='8%' height='6rem' mobileHeight='5rem' mobileWidth='15%' />
              </Flex>
              <Button type='submit' borderRadius='3rem' width='35%' margin='2rem 0'>Verify</Button>
              <Flex mobileDirection='row' gap='1rem' justifyContent='center' >
                <Link href='/'>
                  <BadgeLink>
                    Resend in 00.59
                  </BadgeLink>
                </Link>
              </Flex>
            </Flex>
            </Divider>
      </UserAuth>
    </>
  )
}

export default OTP
