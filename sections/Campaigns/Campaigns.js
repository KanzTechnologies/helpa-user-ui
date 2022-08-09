import {useState}from 'react'
import { CardAmount, CardContainer, CardDescription, CardImage, CardNameTag, CardTitle } from '@components/Card/Card'
import { FaWhatsapp } from 'react-icons/fa'
import { PageSection } from '@components/Section/Section'
import { Divider, Flex } from '@components/Utilities/Utilities'
import Button, { IconButton } from '@components/Button/Button'
import { Icon } from '@components/Icon/Icon'
import { Image } from '@components/Image/Image'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { MediumHeaderDark, RegularText } from '@components/Typography/Typography'
import DropDown, { DropDownItems, DropDownList } from '@components/DropDown/DropDown'
import { RiFacebookCircleLine, RiInstagramLine, RiTelegramLine, RiTwitterLine, RiArrowDropRightLine } from "react-icons/ri"
import Link from 'next/link'

const iconStyles = {
  margin: '-0.3rem 0rem',
  display: 'inline-block',
}

const Campaigns = ({ title }) => {

  return (
    <PageSection>
      <MediumHeaderDark>
        {title}
      </MediumHeaderDark>
      <Flex flexWrap='initial' mdWrap='wrap' mdJContent='center' gap='1.5rem'>
        <CardContainer mdWidth='38%'>
          <CardImage>
            <Image src='/images/png/campaign image 1.png' alt='campaign' />
          </CardImage>
          <Divider topBottom='1.5rem' leftRight='1.5rem'>
            <CardNameTag>
              BY ABOLA SAHEED
            </CardNameTag>
            <CardTitle>
              Support My Brother get A Kidney transplant.
            </CardTitle>
            <CardDescription>
              As salam alaykum wabarakutu. I am in need of your help to get......
            </CardDescription>
            <Flex justifyContent='flex-end' gap='1.5rem' mobileDirection='row'>
              <IconButton>
                <DropDown
                  top='3rem'
                  label={
                    <>
                      Share <Icon src='/images/svg/share.svg' alt='share' />
                    </>
                  }
                >
                  <DropDownItems>
                    <DropDownList>
                      <Flex mobileDirection='row' gap='1rem'>
                        <RiFacebookCircleLine style={iconStyles} color='#0C96C4' />
                        Facebook
                      </Flex>
                    </DropDownList>
                    <DropDownList>
                      <Flex mobileDirection='row' gap='1rem'>
                        <RiInstagramLine style={iconStyles} color='#FF26C2' />
                        Instagram
                      </Flex>
                    </DropDownList>
                    <DropDownList>
                      <Flex mobileDirection='row' gap='1rem'>
                        <RiTelegramLine style={iconStyles} color='#53C3E9'/>
                        Telegram
                      </Flex>
                    </DropDownList>
                    <DropDownList>
                      <Flex mobileDirection='row' gap='1rem'>
                        <RiTwitterLine style={iconStyles} color='#0C96C4'/>
                        Twitter
                      </Flex>
                    </DropDownList>
                  </DropDownItems>
                </DropDown>
              </IconButton>
              <IconButton>
                Share <FaWhatsapp style={iconStyles} color='rgba(27, 183, 33, 0.97)'  />
              </IconButton>
            </Flex>
            <CardAmount>
              #345,451 Raised of #10M
            </CardAmount>
            <ProgressBar progressLevel='40' />
            <Divider topBottom='1rem'>
              <Button style={{ paddingInline: '11rem' }} borderRadius='5rem' boxShadow='0px 9px 5px -2px rgba(0,0,0,0.18)'>
                DONATE
              </Button>
            </Divider>
          </Divider>
        </CardContainer>
        <CardContainer mdWidth='38%'>
          <CardImage>
            <Image src='/images/png/campaign image 1.png' alt='campaign' />
          </CardImage>
          <Divider topBottom='1.5rem' leftRight='1.5rem'>
            <CardNameTag>
              BY ABOLA SAHEED
            </CardNameTag>
            <CardTitle>
              Support My Brother get A Kidney transplant.
            </CardTitle>
            <CardDescription>
              As salam alaykum wabarakutu. I am in need of your help to get......
            </CardDescription>
            <Flex justifyContent='flex-end' gap='1.5rem' mobileDirection='row'>
              <IconButton>
                <DropDown
                  top='3rem'
                  label={
                    <>
                      Share <Icon src='/images/svg/share.svg' alt='share' />
                    </>
                  }
                >
                  <DropDownItems>
                    <DropDownList>
                      <Flex mobileDirection='row' gap='1rem'>
                        <RiFacebookCircleLine style={iconStyles} color='#0C96C4' />
                        Facebook
                      </Flex>
                    </DropDownList>
                    <DropDownList>
                      <Flex mobileDirection='row' gap='1rem'>
                        <RiInstagramLine style={iconStyles} color='#FF26C2' />
                        Instagram
                      </Flex>
                    </DropDownList>
                    <DropDownList>
                      <Flex mobileDirection='row' gap='1rem'>
                        <RiTelegramLine style={iconStyles} color='#53C3E9'/>
                        Telegram
                      </Flex>
                    </DropDownList>
                    <DropDownList>
                      <Flex mobileDirection='row' gap='1rem'>
                        <RiTwitterLine style={iconStyles} color='#0C96C4'/>
                        Twitter
                      </Flex>
                    </DropDownList>
                  </DropDownItems>
                </DropDown>
              </IconButton>
              <IconButton>
                Share <FaWhatsapp style={iconStyles} color='rgba(27, 183, 33, 0.97)' />
              </IconButton>
            </Flex>
            <CardAmount>
              #345,451 Raised of #10M
            </CardAmount>
            <ProgressBar progressLevel={'40'} />
            <Divider topBottom={'1rem'}>
              <Button style={{ paddingInline: '11rem' }} borderRadius='5rem' boxShadow='0px 9px 5px -2px rgba(0,0,0,0.18)'>
                DONATE
              </Button>
            </Divider>
          </Divider>
        </CardContainer>
        <CardContainer mdWidth='38%'>
          <CardImage>
            <Image src='/images/png/campaign image 1.png' alt='campaign' />
          </CardImage>
          <Divider topBottom='1.5rem' leftRight='1.5rem'>
            <CardNameTag>
              BY ABOLA SAHEED
            </CardNameTag>
            <CardTitle>
              Support My Brother get A Kidney transplant.
            </CardTitle>
            <CardDescription>
              As salam alaykum wabarakutu. I am in need of your help to get......
            </CardDescription>
            <Flex justifyContent='flex-end' gap='1.5rem' mobileDirection='row'>
              <IconButton>
                <DropDown
                  top='3rem'
                  label={
                    <>
                      Share <Icon src='/images/svg/share.svg' alt='share' />
                    </>
                  }
                >
                  <DropDownItems>
                    <DropDownList>
                      <Flex mobileDirection='row' gap='1rem'>
                        <RiFacebookCircleLine style={iconStyles} color='#0C96C4' />
                        Facebook
                      </Flex>
                    </DropDownList>
                    <DropDownList>
                      <Flex mobileDirection='row' gap='1rem'>
                        <RiInstagramLine style={iconStyles} color='#FF26C2' />
                        Instagram
                      </Flex>
                    </DropDownList>
                    <DropDownList>
                      <Flex mobileDirection='row' gap='1rem'>
                        <RiTelegramLine style={iconStyles} color='#53C3E9'/>
                        Telegram
                      </Flex>
                    </DropDownList>
                    <DropDownList>
                      <Flex mobileDirection='row' gap='1rem'>
                        <RiTwitterLine style={iconStyles} color='#0C96C4'/>
                        Twitter
                      </Flex>
                    </DropDownList>
                  </DropDownItems>
                </DropDown>
              </IconButton>
              <IconButton>
                Share <FaWhatsapp style={iconStyles} color='rgba(27, 183, 33, 0.97)' />
              </IconButton>
            </Flex>
            <CardAmount>
              #345,451 Raised of #10M
            </CardAmount>
            <ProgressBar progressLevel={40} />
            <Divider topBottom={'1rem'}>
              <Button style={{ paddingInline: '11rem' }} borderRadius={'5rem'} boxShadow={'0px 9px 5px -2px rgba(0,0,0,0.18)'}>
                DONATE
              </Button>
            </Divider>
          </Divider>
        </CardContainer>
        <CardContainer mdWidth='38%'>
          <CardImage>
            <Image src='/images/png/campaign image 1.png' alt='campaign' />
          </CardImage>
          <Divider topBottom={'1.5rem'} leftRight={'1.5rem'}>
            <CardNameTag>
              BY ABOLA SAHEED
            </CardNameTag>
            <CardTitle>
              Support My Brother get A Kidney transplant.
            </CardTitle>
            <CardDescription>
              As salam alaykum wabarakutu. I am in need of your help to get......
            </CardDescription>
            <Flex justifyContent={'flex-end'} gap={'1.5rem'} mobileDirection='row'>
              <IconButton>
                <DropDown
                  top='3rem'
                  label={
                    <>
                      Share <Icon src='/images/svg/share.svg' alt='share' />
                    </>
                  }
                >
                  <DropDownItems>
                    <DropDownList>
                      <Flex mobileDirection='row' gap='1rem'>
                        <RiFacebookCircleLine style={iconStyles} color='#0C96C4' />
                        Facebook
                      </Flex>
                    </DropDownList>
                    <DropDownList>
                      <Flex mobileDirection='row' gap='1rem'>
                        <RiInstagramLine style={iconStyles} color='#FF26C2' />
                        Instagram
                      </Flex>
                    </DropDownList>
                    <DropDownList>
                      <Flex mobileDirection='row' gap='1rem'>
                        <RiTelegramLine style={iconStyles} color='#53C3E9'/>
                        Telegram
                      </Flex>
                    </DropDownList>
                    <DropDownList>
                      <Flex mobileDirection='row' gap='1rem'>
                        <RiTwitterLine style={iconStyles} color='#0C96C4'/>
                        Twitter
                      </Flex>
                    </DropDownList>
                  </DropDownItems>
                </DropDown>
              </IconButton>
              <IconButton>
                Share <FaWhatsapp style={iconStyles} color='rgba(27, 183, 33, 0.97)' />
              </IconButton>
            </Flex>
            <CardAmount>
              #345,451 Raised of #10M
            </CardAmount>
            <ProgressBar progressLevel={'40'} />
            <Divider topBottom={'1rem'}>
              <Button style={{ paddingInline: '11rem' }} borderRadius={'5rem'} boxShadow={'0px 9px 5px -2px rgba(0,0,0,0.18)'}>
                DONATE
              </Button>
            </Divider>
          </Divider>
        </CardContainer>
      </Flex>
      <Flex justifyContent='flex-end'>
        <Link href='/CampaignPage/CampaignPage'>
            <RegularText color='#F69D25' style={{ margin: '1.5rem' }}>
              See More <RiArrowDropRightLine style={iconStyles} color='#F69D25' />
            </RegularText>
        </Link>
      </Flex>
    </PageSection>
  )
}

export default Campaigns
