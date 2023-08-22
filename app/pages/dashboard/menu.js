import React, {useEffect} from 'react';
import { ChakraProvider, theme, Container, Flex, Spacer, Stack, VStack, Box, Heading, Avatar, AvatarBadge, AvatarGroup, IconButton, Button, ButtonGroup, Tooltip } from '@chakra-ui/react';
import { FaHouzz, FaDatabase, FaDesktop, FaCog, FaTasks, FaArchive } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
    return (
      <ChakraProvider theme={theme}>
        <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px" textAlign="center">
          <Flex w="15%" flexDir="column" bg="blue.900" color="white">
            <Flex flexDir="column" >
              <Flex flexDir="column" as="nav">
                <Heading mt={20} mb={50} fontSize="4xl" alignSelf="center" >HRC</Heading>
                <VStack spacing={3} justify="flex-start">
                  <Link href="menu">
                    <Button leftIcon={<FaHouzz/>} w="100%" bg="blue.800">Home</Button>
                  </Link>
                  <Link href="monitoring">
                    <Button leftIcon={<FaDesktop/>} w="100%" bg="blue.900">Monitoring</Button>
                  </Link>
                  <Link href="taskmanager">
                    <Button leftIcon={<FaTasks/>} w="100%" bg="blue.900">Task Manager</Button>
                  </Link>
                  <Link href="assetinventory">
                    <Button leftIcon={<FaArchive/>} w="100%" bg="blue.900">Asset Inventory</Button>
                  </Link>
                  <Link href="database">
                    <Button leftIcon={<FaDatabase/>} w="100%" bg="blue.900">Database</Button>
                  </Link>
                  <Link href="settings">
                    <Button leftIcon={<FaCog/>} w="100%" bg="blue.900">Settings</Button>
                  </Link>
                </VStack>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </ChakraProvider>
    )
  }
  