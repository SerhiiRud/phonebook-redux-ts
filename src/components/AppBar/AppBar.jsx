import { useColorModeValue, useColorMode, Button } from "@chakra-ui/react";
import { Flex, Box } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#857F72", "#4267B2");
  const color = useColorModeValue("white", "white");

  return (
    <Box p="20px" position="relative" bg={bg} color={color}>
      <Flex align="center" justify="space-between">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        <Button
          onClick={toggleColorMode}
          p="1px"
          position="absolute"
          top="5em"
          right="0.5em"
          size="sm"
        >
          {colorMode === "light" ? (
            <SunIcon />
          ) : (
            <MoonIcon color="blackAlpha.800" />
          )}
        </Button>
      </Flex>
    </Box>
  );
};
