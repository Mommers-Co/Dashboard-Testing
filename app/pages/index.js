import React from 'react';
import { navLinks } from '../pages/utils/data';
import { ChakraProvider, Button, Flex, Heading, Input, theme, } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-start" />
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex direction="column" p={12} rounded={6}>
            <Heading mb={6}>Welcome</Heading>
          </Flex>
        </Flex>
    </ChakraProvider>
  )
}
