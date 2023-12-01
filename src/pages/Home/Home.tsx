import { Link as ReachLink } from "react-router-dom";
import { Box, Text, Heading, Link } from "@chakra-ui/react";
import { useAuth } from "../../hooks";
//import { EditIcon } from '@chakra-ui/icons';
//import addressBook from 'src/images/addressbook.svg';

export const Home = () => {
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();

  return (
    <Box
      p="40px"
      mr="auto"
      ml="auto"
      w="600px"
      h="800px"
      mb="30px"
      mt="20px"
      border="1px"
      borderColor="black.700"
      borderRadius="8px"
    >
      {isLoggedIn ? (
        <Text textAlign="center" fontSize="2xl" fontWeight="bold">
          Welcome, {user.name}!
        </Text>
      ) : (
        <Text textAlign="center">
          <Text as="span" fontSize="2xl" fontWeight="bold">
            Please,{" "}
          </Text>
          <Link
            as={ReachLink}
            textDecoration="underline"
            color="#FF9900"
            to="/login"
          >
            <Text
              as="span"
              fontSize="2xl"
              _hover={{ fontSize: 25 }}
              fontWeight="bold"
            >
              Log in.
            </Text>
          </Link>
        </Text>
      )}
      <Heading mt="100px" fontSize="3xl" textAlign="center">
        Stay connected with your Phonebook!
      </Heading>
    </Box>
  );
};
