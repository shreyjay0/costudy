import React from "react";
import { Box, Heading, Center } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

interface FindProps {
  name: string;
  link: string;
  img: any;
}

const FindBy: React.FC<FindProps> = (props) => {
  const history = useHistory();
  const onClickFind = () => {
    history.push(props.link);
  };
  return (
    <Box
      className="study-by"
      bg="#F5F4F2"
      borderRadius="30px"
      onClick={onClickFind}
      textAlign="center"
      m="3"
    >
      <Center
        textAlign="center"
        w="380px"
        h="380px"
        d="flex"
        p="5"
        flexDirection="column"
      >
        <div>
          <img src={props.img} className="fg-img" />
        </div>
        <Heading className="ft-head">{props.name}</Heading>
      </Center>
    </Box>
  );
};

export default FindBy;
