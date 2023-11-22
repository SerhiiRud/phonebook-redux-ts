import { useColorModeValue } from '@chakra-ui/react';
import { Text, Box } from '@chakra-ui/react';

export const Footer = () => {
  const bg = useColorModeValue('#857F72', '#4267B2');
  const color = useColorModeValue('white', 'white');

  return (
    <Box p="20px" w="100%" bg={bg} color={color}>
      <Text>@SerhiiRud 2023 &#127482;&#127462;</Text>
    </Box>
  );
};
