import Head from 'head'
import { CardContainer, CardDescription, CardTitle } from '@components/Card/Card'
import { PageSection } from '@components/Section/Section'
import { LargeRegularText, MediumHeaderDark, RegularText } from '@components/Typography/Typography'
import { Divider, Flex } from '@components/Utilities/Utilities'
import { BadgeLink } from '@components/Link/Link'
import { FiChevronDown } from 'react-icons/fi'
import { BsCalendar3 } from 'react-icons/bs'
import { Image } from '@components/Image/Image'

const iconStyles = {
  margin: '-0.3rem 1rem',
  display: 'inline-block',
  fontSize: '2rem'
}

const Analytics = () => {
  return (
    <>
     <Head>
        <title>Helpa - Analytics</title>
        <meta name="description" content="Donate and raise funds easily with Helpa" />
        <link rel="icon" href="/images/png/favicon.png" />
      </Head>
      <PageSection topBottom='3rem' leftRight='3rem'>
        <MediumHeaderDark>  
          Donations
        </MediumHeaderDark>
        <Divider topBottom='2rem'>
          <CardContainer shadow='none' border='1px solid #EDEFF5' padding='2rem 3rem' >
            <Flex mobileDirection='row' justifyContent='space-evenly'>  
              <Divider>
                <CardDescription>Net Donation</CardDescription>
                <LargeRegularText>$32,450</LargeRegularText>
              </Divider>
              <Divider>
                <CardDescription>Net Donation</CardDescription>
                <LargeRegularText>$32,450</LargeRegularText>
              </Divider>
              <Divider>
                <CardDescription>Net Donation</CardDescription>
                <LargeRegularText>$32,450</LargeRegularText>
              </Divider>
              <Divider>
                <CardDescription>Net Donation</CardDescription>
                <LargeRegularText>$32,450</LargeRegularText>
              </Divider>
            </Flex>
          </CardContainer>
        </Divider>
      </PageSection>
      <PageSection>
        <Flex flexDirection='column' justifyContent='center'>
          <CardContainer padding='2rem 3rem 2rem'>
            <Flex justifyContent='space-between' mobileDirection='row'> 
              <RegularText>Subscription Performance</RegularText>
              <BadgeLink>
              <BsCalendar3 style={iconStyles} />
                All Time
                <FiChevronDown style={iconStyles} />
              </BadgeLink>
            </Flex>
            <Divider topBottom='1.5rem'>
              <Image src='/images/png/chart.png' alt='graph' /> 
            </Divider>
          </CardContainer>
          <CardContainer padding='2rem 3rem 2rem'>
            <RegularText>Subscription Performance</RegularText>
            <Divider topBottom='1rem'>
              <Flex>
              <Image src='/images/png/doughnut.png' alt='graph' />
              <CardContainer shadow='none' color='rgba(12, 150, 196, 0.08)' padding='3rem'>
                <Flex mobileDirection='row' gap='3rem'> 
                  <Divider topBottom='2rem'>
                      <CardDescription>Start Date</CardDescription>
                      <CardTitle>January 23, 2022</CardTitle>
                  </Divider>
                  <Divider topBottom='2rem'>
                      <CardDescription>Maturity Date</CardDescription>
                      <CardTitle>October 23, 2022</CardTitle>
                  </Divider>
                </Flex>
                <Flex mobileDirection='row' gap='3rem'> 
                  <Divider topBottom='2rem'>
                      <CardDescription>Target Donation</CardDescription>
                      <CardTitle>#500,000.00</CardTitle>
                  </Divider>
                  <Divider topBottom='2rem'>
                      <CardDescription>Donation Derived</CardDescription>
                      <CardTitle>#250,000.00</CardTitle>
                  </Divider>
                </Flex>
              </CardContainer>
              </Flex>
            </Divider>
          </CardContainer>
        </Flex>
      </PageSection>
    </>
  )
}

export default Analytics
