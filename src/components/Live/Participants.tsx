import { Box, Container, Divider, Heading, HStack } from "@chakra-ui/layout";
import { useHistory } from "react-router-dom";
import { CloseButton } from "@chakra-ui/close-button";
import { Image } from "@chakra-ui/image";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import addfrnd from "../../assets/addfrnd.svg";
import sideopt from "../../assets/sideopt.svg";
const Participants = () => {
  const history = useHistory();
  const onSubmitCancel = () => {};
  return (
    <div className="Participants-outer">
      <Container
        bg="#FFF"
        p="34px"
        w="100%"
        minWidth="22em"
        pt="0"
        borderRadius="20"
      >
        <HStack justifyContent="space-between">
          <Heading className="ft-head" fontWeight="bold" maxW="70%" pt="30">
            Participants
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
              <Image src={sideopt} ml="2em" />
            </HStack>
          </Box>
          <Box bg="#F5F4F2" borderRadius="8px" py="5px">
            <HStack>
              <Image src={p1} ml="2" />
              <Heading as="h5" fontWeight="normal" fontSize="20px">
                Marrie Sams{" "}
              </Heading>
              <Image src={addfrnd} ml="2.3em" />
              <Image src={sideopt} />
            </HStack>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Participants;
