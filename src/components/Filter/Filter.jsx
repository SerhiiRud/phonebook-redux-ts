import { useDispatch } from "react-redux";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  FormHelperText,
  FormControl,
  FormLabel,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

import { setFilter } from "../../redux/contacts/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const bg = useColorModeValue("#423d33", "transparent");
  const color = useColorModeValue("gray.400", "gray.800");

  const onSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(setFilter(form.value));
  };

  return (
    <Box
      p="20px"
      ml="40px"
      w="500px"
      h="200px"
      mb="30px"
      mt="20px"
      border="1px"
      borderColor="black.700"
      borderRadius="8px"
    >
      <Heading fontSize="2xl" textAlign="center" mb="20px">
        Search a contact
      </Heading>
      <FormControl>
        <FormLabel width="100%">
          <FormHelperText textAlign="center">Search for Name</FormHelperText>
          <InputGroup mt="10px">
            <InputLeftElement pointerEvents="none" children={<Search2Icon />} />
            <Input
              color={color}
              bg={bg}
              borderColor="gray.400"
              variant="filled"
              placeholder="Enter a name"
              _placeholder={{ color: "gray.500" }}
              type="text"
              name="filter"
              //value={filterValue}
              onChange={onSearch}
              autoComplete="off"
            />
          </InputGroup>
        </FormLabel>
      </FormControl>
    </Box>
  );
};
