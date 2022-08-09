import React from 'react'
import UserAuth from '@sections/UserAuth/UserAuth'
import { MediumHeaderDark, RegularText } from '@components/Typography/Typography'
import { Divider, Flex } from '@components/Utilities/Utilities'
import InputField, { Label } from '@components/InputField/InputField'
import Button from '@components/Button/Button'
import Head from 'next/head'

const CreatePassword = () => {
  return (
    <>
      <Head>
        <title>Helpa - Create new password</title>
        <meta name="description" content="Donate and raise funds easily with Helpa" />
        <link rel="icon" href="/images/png/favicon.png" />
      </Head>
      <UserAuth>
        <MediumHeaderDark>
           Create Password
        </MediumHeaderDark>
        <RegularText>
          Set a new password to continue
        </RegularText>
        <Flex flexDirection='column'>
          <Flex flexDirection='column' width='25vw' mobileWidth='100%' alignItems='baseline'>
          <Label>New Password</Label>
          <InputField type='password' placeholder='New Password' />
        </Flex>
        <Flex flexDirection='column' width='25vw' mobileWidth='100%' alignItems='baseline'>
          <Label>Re-enter Password</Label>
          <InputField type='password' placeholder='Re-enter Password' />
        </Flex>
        <Button borderRadius='3rem' type='submit' margin='1rem 0'>Reset Password</Button>
        </Flex>
      </UserAuth>
    </>
  )
}

export default CreatePassword
