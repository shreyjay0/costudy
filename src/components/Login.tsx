import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import { useHistory } from "react-router-dom";
import Studyco from "../assets/Studyco.svg";
function Login() {
  const history = useHistory();
  const onLogin = () => {
    history.push("/login");
  };
  const onSignUp = () => {
    history.push("/signup");
  };
  return (
    <HStack
      w="100vw"
      justifyContent="space-between"
      position="relative"
      top="15px"
      px="14"
      mt="10px"
    >
      <Box>
        <Image src={Studyco}></Image>
      </Box>
      <Box>
        <Text
          m="auto 0"
          ml="5"
          as="u"
          _hover={{ cursor: "pointer" }}
          onClick={onLogin}
          mr="5"
        >
          Login
        </Text>
        <Button color="white" bg="#4BB4AD" onClick={onSignUp}>
          Sign Up
        </Button>
      </Box>
    </HStack>
  );
}

export default Login;
