import React from 'react';
import { ChakraProvider, theme, Box, Button, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, button, } from '@chakra-ui/react';

export default function List() {
    return (
      <ChakraProvider theme={theme}>
        <Menu>
  <MenuButton as={ Button } colorScheme='teal'>
    Profile
  </MenuButton>
  <MenuList>
  <MenuGroup title='Project Board'>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='System'>
      <MenuItem>Remote</MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>Docs</MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Profile'>
      <MenuItem>My Account</MenuItem>
      <MenuItem>Admin</MenuItem>
      <MenuItem>Settings</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
      </ChakraProvider>
    )
  }
  