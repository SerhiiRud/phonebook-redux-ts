import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { ContactList } from "../../components/ContactList/ContactList";
import { ContactForm } from "../../components/Phonebook/Phonebook";
import { Filter } from "../../components/Filter/Filter";
import { getContacts } from "../../redux/contacts/selectors";

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Heading textAlign="center" mt="20px">
        Phonebook
      </Heading>
      <Flex align="start" justify="center">
        <Flex align="center" direction="column">
          <ContactForm />

          {contacts.length > 0 && <Filter />}
        </Flex>
        <Flex direction="column">
          <Box
            p="20px"
            ml="40px"
            w="500px"
            h="350px"
            mb="30px"
            mt="20px"
            border="1px"
            borderColor="black.700"
            borderRadius="8px"
          >
            {contacts.length > 0 ? (
              <>
                <Heading fontSize="2xl" textAlign="center" mb="20px">
                  Contacts
                </Heading>
                <ContactList />
              </>
            ) : (
              <Text align="center">You have no contacts</Text>
            )}
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
