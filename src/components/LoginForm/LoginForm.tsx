import { useDispatch } from "react-redux";
import {
  Box,
  Input,
  Flex,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ReachLink } from "react-router-dom";
import { logIn } from "../../redux/auth/operations";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const bg = useColorModeValue("#423d33", "transparent");
  const color = useColorModeValue("gray.400", "gray.800");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = e.currentTarget[0] as HTMLInputElement;
    const password = e.currentTarget[1] as HTMLInputElement;
    dispatch<any>(
      logIn({
        // email: form.elements[0].value,
        // password: form.elements[1].value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      p="40px"
      mr="auto"
      ml="auto"
      w="600px"
      h="600px"
      mb="30px"
      mt="20px"
      border="1px"
      borderColor="black.700"
      borderRadius="8px"
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <Flex
          align="center"
          justify="center"
          gap="24px"
          direction="column"
          maxW="320px"
          m="0 auto"
        >
          <Input
            color={color}
            bg={bg}
            borderColor="gray.400"
            variant="filled"
            placeholder="Email"
            _placeholder={{ color: "gray.500" }}
            type="email"
            name="email"
          />
          <Input
            color={color}
            bg={bg}
            borderColor="gray.400"
            variant="filled"
            placeholder="Password"
            _placeholder={{ color: "gray.500" }}
            type="password"
            name="password"
          />
          <Button
            type="submit"
            w="100%"
            color={color}
            bg="gray.600"
            _hover={{ bg: "#FF9900" }}
          >
            Log In
          </Button>
        </Flex>
      </form>

      <Text textAlign="center" mt="20px">
        <Text as="span" fontSize="12" fontWeight="bold">
          Don't have an account?{" "}
        </Text>
        <Link
          // as={ReachLink}
          // textDecoration="underline"
          // color="#FF9900"
          to="/register"
        >
          <Text
            as="span"
            textDecoration="underline" //?
            color="#FF9900" //?
            fontSize="12"
            _hover={{ color: "#FF9900" }}
            fontWeight="bold"
            //textDecoration="underline"
          >
            Register now!
          </Text>
        </Link>
      </Text>
    </Box>
  );
};
