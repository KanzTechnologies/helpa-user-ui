import Head from 'next/head'
import UserHeader from '@sections/Header/UserHeader'
import { PageSection } from '@components/Section/Section'
import Footer from '@components/Footer/Footer'
import { Flex, Divider, LineDivider } from '@components/Utilities/Utilities'
import InputField from '@components/InputField/InputField'
import Button from '@components/Button/Button'
import { LargeRegularText, MediumHeaderDark, RegularText } from '@components/Typography/Typography'
import { FiArrowLeft } from 'react-icons/fi'
import { AppLink } from '@components/Link/Link'
import { CardTitle } from '@components/Card/Card'

const iconStyles = {
  margin: '-0.3rem 1rem',
  display: 'inline-block',
  fontSize: '2rem'
}

const Publish= () => {
  return (
    <>
    <Head>
        <title>Helpa - Create Campaign</title>
        <meta name="description" content="Donate and raise funds easily with Helpa" />
        <link rel="icon" href="/images/png/favicon.png" />
      </Head>
      <UserHeader />
      <PageSection color='#F8F8F8' topBottom='5rem' leftRight='22rem' mobileLeftRight='2rem'>
        <MediumHeaderDark>Almost there</MediumHeaderDark>
        <RegularText>Set your campaign start and end date</RegularText>
        <LineDivider />
        <Divider topBottom='2rem'>
          <LargeRegularText>Campaign duration (compulsory).</LargeRegularText>
          <Divider topBottom='2rem'>
            <Flex>
             <Divider>
                <CardTitle>Start Date</CardTitle>
                <InputField placeholder='12/2/2022' width='50%' radius='.1rem' /> 
             </Divider>
             <Divider>
             <CardTitle>End Date</CardTitle>
                <InputField placeholder='12/2/2022' width='50%' radius='.1rem' /> 
             </Divider>
            </Flex>
          </Divider>
        </Divider>
        <Flex justifyContent='end'>
          <Button borderRadius='3rem'>
            Publish Campaign
          </Button>
        </Flex>
        <Flex justifyContent='end'>
          <AppLink >
            <FiArrowLeft style={iconStyles} />
            Back
          </AppLink>
        </Flex>
      </PageSection>
      <Footer />
    </>
  )
}

export default Publish
