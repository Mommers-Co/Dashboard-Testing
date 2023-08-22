import React from 'react';
import { ChakraProvider, Button, Flex, Heading, Input, theme, } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export default function Custom500() {
    return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-start" />
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex direction="column" p={12} rounded={6}>
            <Heading mb={6}>500 - Server-side error occurred</Heading>
          </Flex>
        </Flex>
    </ChakraProvider>
    )
  }