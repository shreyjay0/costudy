import React from "react";
import PropTypes from "prop-types";
import locIcon from "../../assets/locIcon.svg";
import subIcon from "../../assets/subIcon.svg";
import textIcon from "../../assets/textIcon.svg";
import { Grid, Container, Center, Heading } from "@chakra-ui/react";
import "./Find.css";
import FindBy from "./FindBy";

const Find = () => {
  const FindProps = [
    {
      name: "Study by location",
      link: "/session/study-by-location",
      FIcon: locIcon,
    },
    {
      name: "Study by subject",
      link: "/session/study-by-subject",
      FIcon: subIcon,
    },
    {
      name: "Study by textbook",
      link: "/session/study-by-textbook",
      FIcon: textIcon,
    },
  ];
  return (
    <Container maxW="90vw" centerContent>
      <div className="find-group">
        <Center className="find-group-head" my="5">
          <Heading
            className="ft-head"
            size="3xl"
            fontWeight="normal"
            color="#4BB4AD"
          >
            Find a group
          </Heading>
        </Center>
        <Grid
          className="find-gr0up-content"
          templateColumns="repeat(3, 1fr)"
          gap={1}
        >
          {FindProps.map((prop) => (
            <FindBy name={prop.name} link={prop.link} img={prop.FIcon} />
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Find;
