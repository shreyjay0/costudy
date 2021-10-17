import React from "react";
import { Grid, Container, Button, Heading, Box, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import bglobe from "../assets/bglobe.png";
const Intro = () => {
  const history = useHistory();
  const handleButtonClick = () => {
    history.push("/session");
  };
  return (
    <div
      className="intro-outer"
      style={{
        backgroundImage: "url(" + bglobe + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        marginTop: "80",
        backgroundPositionY: "150%",
        paddingBottom: "5em",
      }}
    >
      <Container maxW="90vw" leftContent p="20" fontWeight="bolder">
        <div className="intro">
          <Grid
            className="intro-content"
            textAlign="left"
            d="flex"
            flexDirection="column"
          >
            <Heading
              className="ft-head"
              size="4xl"
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
              Study with pals across the globe who are learning the same
              subject.
            </Text>
            <Button
              bg="#E06351"
              color="white"
              onClick={handleButtonClick}
              maxW="40"
              borderRadius="20"
              my="30"
              _hover={{ background: "#D93737" }}
            >
              Join a study room{" "}
            </Button>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Intro;
