import { Button } from "@chakra-ui/button";
import { Box, Container, Heading, Stack } from "@chakra-ui/layout";
import { useHistory } from "react-router-dom";
export default function SessionThanks() {
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };
  const getNewSession = () => {
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
        justifyContent="space-between"
      >
        <Heading
          className="ft-head"
          size="2xl"
          fontWeight="light"
          color="#E06351"
        >
          Thank you for joining the session.
        </Heading>
        <Stack>
          <Button
            bg="#E06351"
            color="white"
            onClick={goHome}
            borderRadius="20"
            my="30"
            minW="100"
            _hover={{ background: "#D93737" }}
          >
            Go home
          </Button>
          <Button
            bg="#E06351"
            color="white"
            onClick={getNewSession}
            borderRadius="20"
            my="30"
            minW="100"
            _hover={{ background: "#D93737" }}
          >
            Start a new session
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
