import React from "react";
import prof1Icon from "../../assets/prof1Icon.svg";
// import prof2Icon from "../../assets/prof2Icon.svg";
import prof3Icon from "../../assets/prof3Icon.svg";
import { Grid, Container, Center, Heading, Box, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Find = () => {
  const ReviewProps = [
    {
      name: "Sean Jones",
      location: "Toronto, ON",
      comment:
        "Using StudyCO has helped me understand biology better. I am so happy that I know all my body parts",
      img: prof1Icon,
    },
    {
      name: "Marcus Matthews",
      location: "Portland, OG",
      comment:
        "Using StudyCO has helped me understand biology better. I am so happy that I know all my body parts",
      img: prof1Icon,
    },
    {
      name: "Susam williams",
      location: "Bangladesh, IN",
      comment:
        "Using StudyCO has helped me understand biology better. I am so happy that I know all my body parts",
      img: prof3Icon,
    },
  ];
  return (
    <Container maxW="90vw" centerContent>
      <div className="review">
        <Center className="review-head" my="20">
          <Heading
            className="ft-head"
            size="3xl"
            fontWeight="normal"
            color="#4BB4AD"
          >
            What people say about us
          </Heading>
        </Center>
        <Grid
          className="review-content"
          templateColumns="repeat(3, 1fr)"
          gap={1}
        >
          {ReviewProps.map((prop) => (
            <RevSection
              name={prop.name}
              location={prop.location}
              comment={prop.comment}
              img={prop.img}
            />
          ))}
        </Grid>
      </div>
    </Container>
  );
};

interface ReviewProps {
  name: string;
  location: string;
  comment: string;
  img: any;
}

const RevSection: React.FC<ReviewProps> = (props) => {
  const history = useHistory();
  return (
    <Box className="review-box" textAlign="center" m="3">
      <Center
        textAlign="center"
        w="380px"
        h="380px"
        d="flex"
        p="5"
        flexDirection="column"
      >
        <div>
          <img src={props.img} />
        </div>
        <Box textAlign="left">
          <Heading className="ft-head" size="md">
            {props.name}
          </Heading>
          <Heading fontWeight="lighter" size="xs" mb="2">
            {props.location}
          </Heading>
          <Text fontWeight="semibold" maxW="60">
            "{props.comment}"
          </Text>
        </Box>
      </Center>
    </Box>
  );
};

export default Find;
