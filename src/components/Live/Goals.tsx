import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
} from "@chakra-ui/layout";
import { useHistory } from "react-router-dom";
import { CloseButton } from "@chakra-ui/close-button";
import { Checkbox } from "@chakra-ui/checkbox";
import { Image } from "@chakra-ui/image";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";

const Goals = () => {
  const history = useHistory();
  const onSubmitCancel = () => {};
  return (
    <div className="goals-outer">
      <Container
        bg="#FFF"
        p="34px"
        w="100%"
        minWidth="22em"
        pt="0"
        borderRadius="20"
      >
        <HStack justifyContent="space-between">
          <Heading
            className="ft-head"
            size="2xl"
            fontWeight="lighter"
            maxW="70%"
            pt="30"
          >
            Goals
          </Heading>
          <CloseButton h="30" onClick={onSubmitCancel}></CloseButton>
        </HStack>
        <Divider my="15" borderColor="black" />
        <Box minH="5vh"></Box>
        <Box>
          <Box bg="#F5F4F2" borderRadius="8px" py="5px" mb="10px">
            <HStack>
              <Image src={p2} ml="2" />
              <Heading as="h5" fontWeight="normal" fontSize="20px">
                Jolene Chan (You){" "}
              </Heading>
            </HStack>
            <Divider borderColor="grey" mt="12px" mb="-9px"></Divider>
            <Stack direction="column" mb="70" m="35px">
              <Checkbox size="md" defaultIsChecked>
                Biology workbook p.5
              </Checkbox>
              <Checkbox size="md" defaultIsChecked>
                Read Textbook
              </Checkbox>
              <Checkbox size="md">Review class notes</Checkbox>
            </Stack>
          </Box>
          <Box bg="#F5F4F2" borderRadius="8px" py="5px">
            <HStack>
              <Image src={p1} ml="2" />
              <Heading as="h5" fontWeight="normal" fontSize="20px">
                Marrie Sams{" "}
              </Heading>
            </HStack>
            <Divider borderColor="grey" mt="12px" mb="-9px"></Divider>
            <Stack direction="column" mb="70" m="35px">
              <Checkbox size="md" defaultIsChecked>
                Biology poster
              </Checkbox>
              <Checkbox size="md">Class exercise</Checkbox>
              <Checkbox size="md">Immune system notes</Checkbox>
            </Stack>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Goals;
