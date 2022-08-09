import Button from '@components/Button/Button'
import InputField, { Label } from '@components/InputField/InputField'
import { AppLink, BadgeLink } from '@components/Link/Link'
import { MediumHeaderDark, RegularText } from '@components/Typography/Typography'
import { Blob, Divider, Flex } from '@components/Utilities/Utilities'
import UserAuth from '@sections/UserAuth/UserAuth'
import Link from 'next/link'
import { FiChevronDown } from 'react-icons/fi'
import Head from 'next/head' 
import DropDown, { DropDownItems, DropDownList } from '@components/DropDown/DropDown'

const iconStyles = {
  margin: '-0.3rem 1rem',
  display: 'inline-block',
  color: '#0C96C4'
}

const SignUp = () => {
  return (
    <>
     <Head>
        <title>Helpa - Create your Helpa Account</title>
        <meta name="description" content="Donate and raise funds easily with Helpa" />
        <link rel="icon" href="/images/png/favicon.png" />
      </Head>
      <UserAuth>
          <MediumHeaderDark>
            Register 
          </MediumHeaderDark>
          <Flex mobileDirection='row' gap='1rem'>
            <Blob />
            <RegularText width='25ch'>Step 1 of 3</RegularText>
          </Flex>
          <Divider topBottom='2rem'>
            <Flex mobileDirection='row' gap='1rem'>
              <RegularText>I am raising funds for </RegularText>
              <DropDown
                top='12%'
                label={
                  <BadgeLink>
                    Personal <FiChevronDown style={iconStyles} />
                  </BadgeLink>
                }
              >
                <DropDownItems>
                  <DropDownList>
                    NGO
                  </DropDownList>
                </DropDownItems>
              </DropDown>
            </Flex>
          </Divider>

          <Flex flexDirection='column'>
            <Flex flexDirection='column' width='25vw' mobileWidth='100%' alignItems='baseline'>
              <Label>First name</Label>
              <InputField type='text' placeholder='First name' />
            </Flex>
            <Flex flexDirection='column' width='25vw' mobileWidth='100%' alignItems='baseline'>
              <Label>Last name</Label>
              <InputField type='text' placeholder='Last name' />
            </Flex>
            <Flex flexDirection='column' width='25vw' mobileWidth='100%' alignItems='baseline'>
              <Label>Email</Label>
              <InputField type='email' placeholder='Email' />
            </Flex>
            <Flex flexDirection='column' width='25vw' mobileWidth='100%' alignItems='baseline'>
              <Label>Phone Number</Label>
              <InputField type='text' placeholder='Phone number' />
            </Flex>
            <Flex flexDirection='column' width='25vw' mobileWidth='100%' alignItems='baseline'>
              <Label>Gender</Label>
              <InputField type='text' placeholder='Gender' />
            </Flex>
            <Flex flexDirection='column' width='25vw' mobileWidth='100%' alignItems='baseline'>
              <Label>Address</Label>
              <InputField type='text' placeholder='Address' />
            </Flex>
            <Button type='submit' borderRadius='3rem' width='100%' margin='2rem 0'>Next</Button>
            <Flex mobileDirection='row' gap='1rem'>
              <RegularText>Registered User? </RegularText>
              <Link href='/login'>
                <AppLink>
                  Log In
                </AppLink>
              </Link>
            </Flex>
          </Flex>
      </UserAuth>
    </>
  )
}

export default SignUp