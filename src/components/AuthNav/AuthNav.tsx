import { NavLink } from 'react-router-dom';
import { List, ListItem } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <List display="flex" gap="8px">
      <ListItem _hover={{ color: '#FF9900' }}>
        <NavLink to="/register">Register</NavLink>
      </ListItem>
      <ListItem _hover={{ color: '#FF9900' }}>
        <NavLink to="/login">Log In</NavLink>
      </ListItem>
    </List>
  );
};
