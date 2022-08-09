import React from 'react'
import UserAuth from '@sections/UserAuth/UserAuth'
import { MediumHeaderDark, RegularText } from '@components/Typography/Typography'
import { Flex } from '@components/Utilities/Utilities'
import InputField, { Label } from '@components/InputField/InputField'
import Button from '@components/Button/Button'
import Head from 'next/head'

const ResetPassword = () => {
  return (
    <>
      <Head>
        <title>Helpa - Reset password</title>
        <meta name="description" content="Donate and raise funds easily with Helpa" />
        <link rel="icon" href="/images/png/favicon.png" />
      </Head>
      <UserAuth>
        <MediumHeaderDark>
           Reset Password
        </MediumHeaderDark>
        <RegularText>
          Enter the email address associated with your account.
        </RegularText>
        <Flex flexDirection='column'>
            <Flex flexDirection='column' width='25vw' mobileWidth='100%' alignItems='baseline'>
          <Label>Email Address</Label>
          <InputField type='email' placeholder='Email Address' />
        </Flex>
        <Button borderRadius='3rem' type='submit'>Reset Password</Button>
        </Flex>
      </UserAuth>
    </>
  )
}

export default ResetPassword
