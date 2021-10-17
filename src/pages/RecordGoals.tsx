import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { Image } from "@chakra-ui/image";
import { InputRightAddon, Input, InputGroup } from "@chakra-ui/input";
import {
  Box,
  Container,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { useHistory } from "react-router-dom";
import Record from "../assets/record.svg";
const RecordGoals = () => {
  const history = useHistory();
  const onSubmitRecord = () => {};
  const onSubmitCancel = () => {
    history.push("/session");
  };
  const getSession = () => {
    history.push("/session/room");
  };
  return (
    <div className="goals-outer">
      <Container bg="#F5F4F2" p="90" minW="70%" pt="0" borderRadius="68">
        <Heading
          className="ft-head"
          size="3xl"
          fontWeight="normal"
          maxW="70%"
          py="50"
        >
          Record your goals for this session
        </Heading>
        <Box>
          <Box>
            <Text pb="2">Goals</Text>
            <InputGroup>
              <Input
                h="51"
                w="50%"
                maxW="550"
                variant="filled"
                placeholder="Write down the tasks you want to accomplish"
                bg="#E7E6E5"
                color="#525051"
                _placeholder={{ color: "#525051" }}
                _focus={{ boxShadow: "none", background: "#DBDBDD" }}
              />
              <InputRightAddon h="51" bg="#E7E6E5">
                <Image
                  src={Record}
                  onClick={onSubmitRecord}
                  _hover={{ transform: "scale(.8)", cursor: "pointer" }}
                />
              </InputRightAddon>
            </InputGroup>
          </Box>
          <Divider my="50" borderColor="black" />
          <Box>
            <Stack direction="column" mb="70">
              <Checkbox size="md">Biology poster</Checkbox>
              <Checkbox size="md">Class exercise</Checkbox>
              <Checkbox size="md">Immune system notes</Checkbox>
            </Stack>

            <Box d="flex">
              <Button bg="#4BB4AD" onClick={getSession}>
                Bring me to a session!
              </Button>
              <Text
                m="auto 0"
                ml="5"
                as="u"
                _hover={{ cursor: "pointer" }}
                onClick={onSubmitCancel}
              >
                Cancel
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default RecordGoals;
