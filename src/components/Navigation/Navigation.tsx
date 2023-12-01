import { NavLink } from "react-router-dom";
import { List, ListItem } from "@chakra-ui/react";
import { useAuth } from "../../hooks";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <List display="flex" gap="8px">
        <ListItem _hover={{ color: "#FF9900" }}>
          <NavLink to="/">Home</NavLink>
        </ListItem>
        {isLoggedIn && (
          <ListItem _hover={{ color: "#FF9900" }}>
            <NavLink to="/contacts">Contacts</NavLink>
          </ListItem>
        )}
      </List>
    </>
  );
};
