import { CardContainer, CardDescription, CardTitle } from '@components/Card/Card'
import { PageSection } from '@components/Section/Section'
import { MediumHeaderDark } from '@components/Typography/Typography'
import { Divider } from '@components/Utilities/Utilities'
import { Image } from '@components/Image/Image'
import Carousel from '@components/Carousel/Carousel'

const Testimonials = () => {
  return (
    <PageSection>
      <MediumHeaderDark textAlign='center'>
        Fundraiser reviews and testominals
      </MediumHeaderDark>
      <Divider style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}>
        <Carousel>
          <CardContainer style={{ padding: '2rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} border='1px solid #F69D25'>
            <MediumHeaderDark textAlign='center'>
              Charity Foundation
            </MediumHeaderDark>
            <CardDescription style={{ padding: '2rem 0'}}>
              In just a year, we have add 50 fundraisers to the platform as we have a 20%  increase in our monthly donations and 10% of recurring donors. Helpas easy to use interfaces has played a vital role in driving this growth. Under the fundraiser profile, there is a mini dashboard that shows each campaign performance and quick day to day insights. 
            </CardDescription>
            <Image src='/images/png/user avi.png' alt='user profile' width='12%' />
            <CardTitle textAlign='center'>Peter Godswill</CardTitle>
            <CardDescription>Director of Human Management</CardDescription>
          </CardContainer>
          <CardContainer style={{ padding: '2rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} border='1px solid #F69D25'>
            <MediumHeaderDark textAlign='center'>
              Charity Foundation
            </MediumHeaderDark>
            <CardDescription style={{ padding: '2rem 0'}}>
              In just a year, we have add 50 fundraisers to the platform as we have a 20%  increase in our monthly donations and 10% of recurring donors. Helpas easy to use interfaces has played a vital role in driving this growth. Under the fundraiser profile, there is a mini dashboard that shows each campaign performance and quick day to day insights. 
            </CardDescription>
            <Image src='/images/png/user avi.png' alt='user profile' width='12%' />
            <CardTitle textAlign='center'>Peter Godswill</CardTitle>
            <CardDescription>Director of Human Management</CardDescription>
          </CardContainer>
          <CardContainer style={{ padding: '2rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} border='1px solid #F69D25'>
            <MediumHeaderDark textAlign='center'>
              Charity Foundation
            </MediumHeaderDark>
            <CardDescription style={{ padding: '2rem 0'}}>
              In just a year, we have add 50 fundraisers to the platform as we have a 20%  increase in our monthly donations and 10% of recurring donors. Helpas easy to use interfaces has played a vital role in driving this growth. Under the fundraiser profile, there is a mini dashboard that shows each campaign performance and quick day to day insights. 
            </CardDescription>
            <Image src='/images/png/user avi.png' alt='user profile' width='12%' />
            <CardTitle textAlign='center'>Peter Godswill</CardTitle>
            <CardDescription>Director of Human Management</CardDescription>
          </CardContainer>
        </Carousel>
      </Divider>
    </PageSection>
  )
}

export default Testimonials
