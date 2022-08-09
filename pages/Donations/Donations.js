import { CardContainer, CardDescription } from '@components/Card/Card'
import { BadgeLink } from '@components/Link/Link'
import { PageSection } from '@components/Section/Section'
import { Table, TableBody, TableHead, TableRow } from '@components/Table/Table'
import { LargeRegularText, MediumHeaderDark, RegularText } from '@components/Typography/Typography'
import { Divider, Flex } from '@components/Utilities/Utilities'
import Head from 'head'
import { FiChevronDown } from 'react-icons/fi'
import { BsBank } from 'react-icons/bs'

const iconStyles = {
  margin: '-0.3rem 1rem',
  display: 'inline-block',
  fontSize: '2rem'
}

const Donations = () => {
  return (
    <>
      <Head>
        <title>Helpa - Donations</title>
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
        <Flex mobileDirection='row' gap='2.5rem'>
          <RegularText>Show</RegularText>
          <Flex mobileDirection='row' gap='1.5rem'>
            <BadgeLink>
              Everything
              <FiChevronDown style={iconStyles} />
            </BadgeLink>
            <BadgeLink>
              2022
              <FiChevronDown style={iconStyles} />
            </BadgeLink>
            <BadgeLink>
             All Months
              <FiChevronDown style={iconStyles} />
            </BadgeLink>
          </Flex>
        </Flex>
        <Flex mobileDirection='row' gap='2.5rem'>
          <RegularText>Show</RegularText>
          <CardContainer>
            <BsBank style={iconStyles} color='#0C96C4'/>
          </CardContainer>
        </Flex>
      </PageSection>
      <PageSection topBottom='3rem' leftRight='3rem'>
        <Table>
          <TableRow>
            <TableHead width='25%'>Date</TableHead>
            <TableHead width='25%'>For</TableHead>
            <TableHead width='25%'>Status</TableHead>
            <TableHead width='25%'>Amount</TableHead>
            <TableHead width='25%'>Withdrawal</TableHead>
          </TableRow>
          <TableRow>
            <TableBody>
              <RegularText>Jan. 14, 2021</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>Medical Bill</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>Pending Clearance</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>$120</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>Withdraw</RegularText>
              </TableBody>
          </TableRow>
          <TableRow>
            <TableBody>
              <RegularText>Jan. 14, 2021</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>Medical Bill</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>Pending Clearance</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>$120</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>Withdraw</RegularText>
              </TableBody>
          </TableRow>
          <TableRow>
            <TableBody>
              <RegularText>Jan. 14, 2021</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>Medical Bill</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>Pending Clearance</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>$120</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>Withdraw</RegularText>
              </TableBody>
          </TableRow>
          <TableRow>
            <TableBody>
              <RegularText>Jan. 14, 2021</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>Medical Bill</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>Pending Clearance</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>$120</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>Withdraw</RegularText>
              </TableBody>
          </TableRow>
          <TableRow>
            <TableBody>
              <RegularText>Jan. 14, 2021</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>Medical Bill</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>Pending Clearance</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>$120</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>Withdraw</RegularText>
              </TableBody>
          </TableRow>
          <TableRow>
            <TableBody>
              <RegularText>Jan. 14, 2021</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>Medical Bill</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>Pending Clearance</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>$120</RegularText>
              </TableBody>
            <TableBody>
              <RegularText>Withdraw</RegularText>
              </TableBody>
          </TableRow>
        </Table>
      </PageSection>
    </>
  )
}

export default Donations
