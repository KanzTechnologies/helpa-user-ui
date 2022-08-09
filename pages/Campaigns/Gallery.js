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
import { FilePlaceholder } from '@components/FileUpload/FileUpload'
import { CardDescription } from '@components/Card/Card'
import { Icon } from '@components/Icon/Icon'

const iconStyles = {
  margin: '-0.3rem 1rem',
  display: 'inline-block',
  fontSize: '2rem'
}

const Gallery= () => {
  return (
    <>
    <Head>
        <title>Helpa - Create Campaign</title>
        <meta name="description" content="Donate and raise funds easily with Helpa" />
        <link rel="icon" href="/images/png/favicon.png" />
      </Head>
      <UserHeader />
      <PageSection color='#F8F8F8' topBottom='5rem' leftRight='22rem' mobileLeftRight='2rem'>
        <MediumHeaderDark>Add Video Url Or Images</MediumHeaderDark>
        <RegularText>Add Relevent Document For Your Donors To See</RegularText>
        <LineDivider />
        <Divider topBottom='2rem'>
          <LargeRegularText>Upload your medical document (optional).</LargeRegularText>
          <RegularText>Max file size: 4mb (xls files only)</RegularText>
          <Divider topBottom='2rem'>
            <Flex gap='2rem'>
              <FilePlaceholder width='30%' mobileWidth='50%'>
                <Icon src='/images/svg/add file.svg' alt='add file icon' width='15' />
                <CardDescription>Browse files or drag and drop here</CardDescription>
              </FilePlaceholder>
              <FilePlaceholder width='30%' mobileWidth='50%'>
                <Icon src='/images/svg/add file.svg' alt='add file icon' width='15' />
                <CardDescription>Browse files or drag and drop here</CardDescription>
              </FilePlaceholder>
              <FilePlaceholder width='30%' mobileWidth='50%'>
                <Icon src='/images/svg/add file.svg' alt='add file icon' width='15' />
                <CardDescription>Browse files or drag and drop here</CardDescription>
              </FilePlaceholder>
            </Flex>
          </Divider>
        </Divider>
      </PageSection>
      <PageSection color='#F8F8F8' topBottom='5rem' leftRight='22rem' mobileLeftRight='2rem'>
        <MediumHeaderDark>Video (Only one)</MediumHeaderDark>
        <LineDivider />
        <RegularText>Upload your video on youtube, copy the url or link and paste it here.</RegularText>
        <Divider topBottom='2rem'>
          <InputField type='text' placeholder='Full Name' width='80%' mobileWidth='100%' radius='.1rem' />
        </Divider>
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

export default Gallery
