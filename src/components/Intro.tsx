import React from "react";
import { Grid, Container, Button, Heading, Box, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Intro = () => {
  const history = useHistory();
  const handleButtonClick = () => {
    history.push("/session");
  };
  return (
    <Container
      maxW="90vw"
      leftContent
      bgImage="url('../assets/bglobe.png')"
      p="20"
      fontWeight="bolder"
    >
      <div className="intro">
        <Grid
          className="intro-content"
          textAlign="left"
          d="flex"
          flexDirection="column"
        >
          <Heading
            className="ft-head"
            size="3xl"
            fontWeight="normal"
            color="#4BB4AD"
          >
            Study today,
            <br /> Study tomorrow.
          </Heading>
          <Text
            my="30"
            fontWeight="normal"
            fontSize="30"
            maxW="700"
            lineHeight="10"
          >
            Study with pals across the globe who are learning the same subject.
          </Text>
          <Button
            colorScheme="orange"
            onClick={handleButtonClick}
            maxW="40"
            borderRadius="20"
            my="30"
          >
            Join a study room{" "}
          </Button>
        </Grid>
      </div>
    </Container>
  );
};

export default Intro;
