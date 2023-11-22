import { useDispatch } from "react-redux";
import { Button, Flex } from "@chakra-ui/react";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../../hooks";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex gap="8px" align="center">
      <p>Welcome, {user.name}</p>
      <Button h="24px" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Flex>
  );
};
