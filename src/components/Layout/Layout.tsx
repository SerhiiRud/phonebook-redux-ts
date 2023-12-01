import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { AppBar } from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  const bg = useColorModeValue("#423d33", "transparent");
  const color = useColorModeValue("white", "gray.800");
  return (
    <>
      <Box mb={0} bg={bg} color={color} w="100%" h="1000px">
        <AppBar />
        <main>
          <Outlet />
        </main>
      </Box>
      <Footer />
    </>
  );
};
