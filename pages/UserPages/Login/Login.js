import Button from '@components/Button/Button'
import InputField, { Label } from '@components/InputField/InputField'
import { AppLink, BadgeLink } from '@components/Link/Link'
import { MediumHeaderDark, RegularText } from '@components/Typography/Typography'
import { Flex } from '@components/Utilities/Utilities'
import UserAuth from '@sections/UserAuth/UserAuth'
import Link from 'next/link'
import Head from 'next/head' 


const iconStyles = {
  margin: '-0.3rem 1rem',
  display: 'inline-block',
  color: '#0C96C4'
}


const Login = () => {
  return (
    <>
     <Head>
        <title>Helpa - Log into your Helpa Account</title>
        <meta name="description" content="Donate and raise funds easily with Helpa" />
        <link rel="icon" href="/images/png/favicon.png" />
      </Head>
      <UserAuth>
          <MediumHeaderDark>
            Login
          </MediumHeaderDark>
          <Flex flexDirection='column'>
              <Flex flexDirection='column' width='25vw' mobileWidth='100%' alignItems='baseline'>
                <Label>Email Address</Label>
                <InputField type='email' placeholder='Email Address' />
              </Flex>
              <Flex flexDirection='column' width='25vw' mobileWidth='100%' alignItems='baseline'>
                <Label>Organization name/Full Name</Label>
                <InputField type='text' placeholder='Organization name or Full Name' />
              </Flex>
              <Flex flexDirection='column' width='25vw' mobileWidth='100%' alignItems='baseline'>
                <Label>Password</Label>
                <InputField type='email' placeholder='Password' />
              </Flex>
              <Flex alignSelf='end'>
                <Link href='/forgotpassword'>
                  <BadgeLink margin='1.5rem 0'>
                    Forgot Password?
                  </BadgeLink>
                </Link>
              </Flex>
              <Button type='submit' borderRadius='3rem' width='100%' margin='2rem 0'>Login</Button>
              <Flex mobileDirection='row' gap='1rem'>
                <RegularText>New Fundraiser</RegularText>
                <Link href='/signup'>
                  <AppLink margin='1.5rem 0'>
                    Create Account
                  </AppLink>
                </Link>
              </Flex>
            </Flex>
      </UserAuth>
    </>
  )
}

export default Login
