import React from 'react'
import Head from 'next/head'
import UserHeader from '@sections/Header/UserHeader'
import { PageSection } from '@components/Section/Section'
import { MediumHeaderDark, RegularText } from '@components/Typography/Typography'
import { Flex, LineDivider } from '@components/Utilities/Utilities'
import Button, { ButtonOutline } from '@components/Button/Button'
import { BadgeLink } from '@components/Link/Link'
import { FiChevronDown } from 'react-icons/fi'
import { Table, TableBody, TableHead, TableRow } from '@components/Table/Table'
import { Image } from '@components/Image/Image'

const iconStyles = {
  margin: '-0.3rem .5rem',
  display: 'inline-block', 
  fontWeight: 'normal',
  fontSize: '1.5rem',
}

const FundraiserCampaigns = () => {
  return (
    <>
      <Head>
        <title>Helpa - Fundraiser Campaigns</title>
        <meta name="description" content="Donate and raise funds easily with Helpa" />
        <link rel="icon" href="/images/png/favicon.png" />
      </Head>
      <UserHeader />
      <PageSection>
        <MediumHeaderDark>Campaign</MediumHeaderDark>
        <Flex justifyContent='space-between'>
          <Flex gap='3rem' mobileDirection='row'>
            <RegularText>Active</RegularText>
            <RegularText>Pending Approval</RegularText>
            <RegularText>Denied</RegularText>
            <RegularText>Paused</RegularText>
          </Flex>
          <Button>Create New Campaign</Button>
        </Flex>
        <LineDivider />
        <Flex justifyContent='space-between'>
          <RegularText>Active Campaign</RegularText>
          <BadgeLink>
            Last 30 days
            <FiChevronDown style={iconStyles}/>
          </BadgeLink>
        </Flex>
        <Table>
          <TableRow>
            <TableHead width='50%'>Campaign</TableHead>
            <TableHead>Impressions</TableHead>
            <TableHead>Clicks</TableHead>
            <TableHead>Donators</TableHead>
            <TableHead></TableHead>
          </TableRow>
          <TableRow>
            <TableBody>
              <Flex gap='1rem'>
                <Image src='/images/png/campaign avi.png' alt='campaign logo' />
                I am Tola, a student and single parent
                suffering from stage 2 cervical cancer.
              </Flex>
            </TableBody>
            <TableBody>
              10,000
            </TableBody>
            <TableBody>
              22,000
            </TableBody>
            <TableBody>
              22,000
            </TableBody>
            <TableBody>
              <ButtonOutline>Edit</ButtonOutline>
            </TableBody>  
          </TableRow>
          <TableRow>
            <TableBody>
              <Flex gap='1rem'>
                <Image src='/images/png/campaign avi.png' alt='campaign logo' />
                I am Tola, a student and single parent
                suffering from stage 2 cervical cancer.
              </Flex>
            </TableBody>
            <TableBody>
              10,000
            </TableBody>
            <TableBody>
              22,000
            </TableBody>
            <TableBody>
              22,000
            </TableBody>
            <TableBody>
              <ButtonOutline>Edit</ButtonOutline>
            </TableBody>
            
          </TableRow>
        </Table>
      </PageSection>
      <PageSection topBottom='4rem'>
        <Flex>
          <RegularText>30 of 320</RegularText>
        </Flex>
      </PageSection>
    </>
  )
}

export default FundraiserCampaigns
