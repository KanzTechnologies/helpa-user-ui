import { Box, Heading, HStack, Image } from '@chakra-ui/react'
import React from 'react'

function Categories() {
  return (
    <Box p='4rem'>
      <Heading as='h3' size='md' textAlign='center' pb='1.5rem' fontWeight='500'>
        Crowdfunding Categories
      </Heading>
      <Box bgColor='#100C2AE5' px='5rem'>
        <HStack>
          <Image alt='ngo' src='/images/png/ServiceHorizontal.png' />
          <Image alt='personal' src='/images/png/ServicePersonal.png' />
          <Image alt='emergency' src='/images/png/ServiceEmergence.png' />
          <Image alt='health' src='/images/png/ServiceHealth.png' />
        </HStack>
      </Box>
    </Box>
  )
}

export default Categories
