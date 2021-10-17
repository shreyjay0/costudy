import { Image } from "@chakra-ui/image";
import {
  InputRightAddon,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/input";
import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { useHistory } from "react-router-dom";
import Record from "../../assets/record.svg";
import attach from "../../assets/attach.svg";
import { CloseButton } from "@chakra-ui/close-button";
const Chat = () => {
  const history = useHistory();
  const onSubmitSend = () => {};
  const onSubmitCancel = () => {};
  return (
    <div className="Chat-outer">
      <Container bg="#FFF" p="34px" w="85%" pt="0" borderRadius="20">
        <HStack justifyContent="space-between">
          <Heading
            className="ft-head"
            size="2xl"
            fontWeight="light"
            maxW="70%"
            pt="30"
          >
            Chat
          </Heading>
          <CloseButton h="30" onClick={onSubmitCancel}></CloseButton>
        </HStack>
        <Divider my="15" borderColor="black" />
        <Box minH="30vh"></Box>
        <Box>
          <Divider my="15" borderColor="black" />
          <Box>
            <InputGroup border="white">
              <InputLeftAddon h="51" bg="#FFF">
                <Image
                  src={attach}
                  onClick={onSubmitSend}
                  _hover={{ transform: "scale(.8)", cursor: "pointer" }}
                />
              </InputLeftAddon>
              <Input
                h="51"
                w="50%"
                p="0"
                maxW="550"
                placeholder="Message"
                bg="#E7E6E5"
                borderRadius="12"
                color="#525051"
                background="white"
                width="18vw"
                _placeholder={{ color: "#525051" }}
                _focus={{ boxShadow: "none", background: "#FFF" }}
                _hover={{
                  background: "white",
                  boxShadow: "none",
                  border: "none",
                }}
              />
              <InputRightAddon h="51" bg="#FFF">
                <Image
                  src={Record}
                  onClick={onSubmitSend}
                  _hover={{ transform: "scale(.8)", cursor: "pointer" }}
                />
              </InputRightAddon>
            </InputGroup>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Chat;
