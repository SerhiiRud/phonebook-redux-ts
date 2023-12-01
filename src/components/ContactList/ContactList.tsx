import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  Button,
  useColorModeValue,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from "../../redux/contacts/selectors";
import { Loader } from "../Loader/Loader";
import { fetchContacts, removeContact } from "../../redux/contacts/operations";
import { TContact } from "../../interfaces/Contacts.interface";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);
  const color = useColorModeValue("gray.400", "gray.800");

  const onDelete = (id: string) => {
    dispatch<any>(removeContact(id));
  };

  useEffect(() => {
    dispatch<any>(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = (contacts: TContact[], filter: string) => {
    return [...contacts].filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    <>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {getVisibleContacts.length > 0 && (
        <List>
          {visibleContacts.map((contact) => (
            <ListItem key={contact.id} mb="3px">
              <SimpleGrid columns={3} spacing={10}>
                <span>{contact.name}: </span>

                <span>{contact.number}</span>

                <Button
                  w="50px"
                  h="30px"
                  color={color}
                  bg="gray.600"
                  _hover={{ bg: "#FF9900" }}
                  type="button"
                  disabled={isLoading}
                  onClick={() => {
                    onDelete(contact.id);
                  }}
                >
                  <DeleteIcon />
                </Button>
              </SimpleGrid>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};
