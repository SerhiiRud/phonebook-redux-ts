import { useDispatch } from "react-redux";
import { Box, Input, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { register } from "../../redux/auth/operations";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const bg = useColorModeValue("#423d33", "transparent");
  const color = useColorModeValue("gray.400", "gray.800");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
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
            placeholder="Name"
            _placeholder={{ color: "gray.500" }}
            type="name"
            name="name"
          />
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
            Register
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
