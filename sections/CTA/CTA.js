import Button from '@components/Button/Button'
import { PageSection } from '@components/Section/Section'
import { MediumHeaderDark } from '@components/Typography/Typography'
import React from 'react'

export const CTA = () => {
  return (
    <PageSection color='rgba(239, 239, 239, 0.3)'>
      <MediumHeaderDark textAlign='center'>
        Ready to start fundraising?
      </MediumHeaderDark>
      <Button style={{ marginInline: 'auto'}}>Create a Campaign</Button>
    </PageSection>
  )
}

export default CTA