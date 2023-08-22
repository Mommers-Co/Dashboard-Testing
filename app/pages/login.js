import React from 'react';
import { ChakraProvider, Button, Flex, Heading, Input, theme, } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export default function Login() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-start" />
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex direction="column" p={12} rounded={6}>
            <Heading mb={6}>Log in</Heading>
            <Input placeholder="Username" variant="filled" mb={3} type="username" name="user" />
            <Input placeholder="Password" variant="filled" mb={6} type="password" name="password"/>
            <Button rounded={25} colorScheme="teal"  >Log in</Button>
          </Flex>
        </Flex>
    </ChakraProvider>
  )
}
