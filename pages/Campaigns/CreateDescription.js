import Head from 'next/head'
import UserHeader from '@sections/Header/UserHeader'
import { PageSection } from '@components/Section/Section'
import Footer from '@components/Footer/Footer'
import { Flex, Divider, LineDivider } from '@components/Utilities/Utilities'
import InputField from '@components/InputField/InputField'
import Button from '@components/Button/Button'
import { MediumHeaderDark, RegularText } from '@components/Typography/Typography'
import { FiArrowLeft } from 'react-icons/fi'
import { AppLink } from '@components/Link/Link'

const iconStyles = {
  margin: '-0.3rem 1rem',
  display: 'inline-block',
  fontSize: '2rem'
}

const CreateDescription = () => {
  return (
    <>
    <Head>
        <title>Helpa - Create Campaign</title>
        <meta name="description" content="Donate and raise funds easily with Helpa" />
        <link rel="icon" href="/images/png/favicon.png" />
      </Head>
      <UserHeader />
      <PageSection color='#F8F8F8' topBottom='5rem' leftRight='22rem' mobileLeftRight='2rem'>
        <MediumHeaderDark>Tell Your Story</MediumHeaderDark>
        <LineDivider />
        <RegularText>Add Relevent Details For Your Donors To See</RegularText>
        <Divider topBottom='2rem'>
          <InputField type='text' placeholder='Input the Header:  i.e  Story' radius='.1rem' />
        </Divider>
        <Divider topBottom='2rem'>
          <InputField type='text' placeholder='I am Saffiyah, a 12years....' radius='.1rem' height='15rem' />
        </Divider>
        <Flex mobileDirection='row' justifyContent='end' gap='2rem'>
          <Button borderRadius='3rem' color='#EBECFF' textColor='#0C96C4'>
            Cancel
          </Button>
          <Button borderRadius='3rem'>
            Add More Story
          </Button>
        </Flex>
        <LineDivider />
        <Flex justifyContent='end'>
          <Button borderRadius='3rem'>
            Save & Continue
          </Button>
        </Flex>
        <Flex justifyContent='end'>
          <AppLink >
            <FiArrowLeft style={iconStyles} />
            Back
          </AppLink>
        </Flex>
      </PageSection>
      <PageSection color='#F8F8F8' topBottom='5rem' leftRight='22rem' mobileLeftRight='2rem'>
        <MediumHeaderDark>Latest Update</MediumHeaderDark>
        <LineDivider />
        <RegularText>Add Latest News On Your Situation For Your Donors To See</RegularText>
        <Divider topBottom='2rem'>
          <InputField type='text' placeholder='Input the Header:  i.e  Story' radius='.1rem' />
        </Divider>
        <Divider topBottom='2rem'>
          <InputField type='text' placeholder='I am Saffiyah, a 12years....' radius='.1rem' height='15rem' />
        </Divider>
        <Flex mobileDirection='row' justifyContent='end' gap='2rem'>
          <Button borderRadius='3rem' color='#EBECFF' textColor='#0C96C4'>
            Cancel
          </Button>
          <Button borderRadius='3rem'>
            Add More Update
          </Button>
        </Flex>
        <LineDivider />
        <Flex justifyContent='end'>
          <Button borderRadius='3rem'>
            Save & Continue
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

export default CreateDescription
