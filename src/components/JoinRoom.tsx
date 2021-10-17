import { Container, Button, Box, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const JoinRoom = () => {
  const history = useHistory();
  const handleButtonClick = () => {
    history.push("/session");
  };
  return (
    <Container mt="5" maxW="90vw" fontWeight="bolder">
      <Box
        bg="#F4D0C2"
        borderRadius="30px"
        my="150"
        p="30"
        d="flex"
        alignItems="center"
        textAlign="center"
      >
        <Heading
          className="ft-head"
          size="3xl"
          fontWeight="light"
          color="#E06351"
        >
          Join 1000+ students and start studying together today!
        </Heading>
        <Button
          bg="#E06351"
          color="white"
          onClick={handleButtonClick}
          borderRadius="20"
          my="30"
          minW="200"
          _hover={{ background: "#D93737" }}
        >
          Join a study room{" "}
        </Button>
      </Box>
    </Container>
  );
};

export default JoinRoom;
