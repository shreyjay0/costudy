import { Box, Container, HStack, Text } from "@chakra-ui/layout";
import GoalsIcon from "../assets/GoalsIcon.svg";
import PartIcon from "../assets/PartIcon.svg";
import MicIcon from "../assets/MicIcon.svg";
import CamIcon from "../assets/CamIcon.svg";
import ShareIcon from "../assets/ShareIcon.svg";
import ChatIcon from "../assets/ChatIcon.svg";
import TuneIcon from "../assets/TuneIcon.svg";
import ExitIcon from "../assets/ExitIcon.svg";

import React from "react";
import avatarStream from "../assets/avatarStream.mp4";
import { Image } from "@chakra-ui/image";
import { useHistory } from "react-router-dom";
const Room = () => {
  const history = useHistory();
  const onClickExit = () => {
    history.push("/session/thanks");
  };
  const onClickCam = () => {};
  const onClickChat = () => {};
  const onClickGoals = () => {};
  const onClickMic = () => {};
  const onClickParticipants = () => {};
  const onClickPlay = () => {};
  const onClickShare = () => {};
  return (
    <Container>
      <Box>
        <video autoPlay loop muted className="backStream" id="backStream">
          <source src={avatarStream} type="video/mp4" />
        </video>
      </Box>
      <HStack
        minW="20%"
        position="fixed"
        bg="white"
        w="100%"
        textAlign="center"
        left="0%"
        bottom="0%"
        py="15px"
        px="65px"
        justifyContent="space-between"
      >
        <Box d="flex" justifyContent="space-between" width="13%">
          <Box>
            <Box
              bg="#e2e2e2"
              h="60px"
              w="60px"
              d="flex"
              onClick={onClickGoals}
              borderRadius="10"
              className="session-controls"
              _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
            >
              <Image
                alt="control"
                m="auto"
                maxH="36px"
                maxW="36px"
                src={GoalsIcon}
                className="in-session-controls"
                _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
              />
            </Box>
            <Text>Goals</Text>
          </Box>

          <Box>
            <Box
              bg="#e2e2e2"
              h="60px"
              w="60px"
              d="flex"
              onClick={onClickParticipants}
              borderRadius="10"
              className="session-controls"
              _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
            >
              <Image
                alt="control"
                m="auto"
                maxH="36px"
                maxW="36px"
                src={PartIcon}
                className="in-session-controls"
                _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
              />
            </Box>
            <Text>Part</Text>
          </Box>
        </Box>
        <Box d="flex" justifyContent="space-between" width="30%">
          <Box>
            <Box
              bg="#e2e2e2"
              h="60px"
              w="60px"
              d="flex"
              onClick={onClickMic}
              borderRadius="10"
              className="session-controls"
              _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
            >
              <Image
                alt="control"
                m="auto"
                maxH="36px"
                maxW="36px"
                src={MicIcon}
                className="in-session-controls"
                _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
              />
            </Box>
            <Text>Mic</Text>
          </Box>
          <Box>
            <Box
              bg="#e2e2e2"
              h="60px"
              w="60px"
              d="flex"
              onClick={onClickCam}
              borderRadius="10"
              className="session-controls"
              _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
            >
              <Image
                alt="control"
                m="auto"
                maxH="36px"
                maxW="36px"
                src={CamIcon}
                className="in-session-controls"
                _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
              />
            </Box>
            <Text>Cam</Text>
          </Box>
          <Box>
            <Box
              bg="#e2e2e2"
              h="60px"
              w="60px"
              d="flex"
              onClick={onClickShare}
              borderRadius="10"
              className="session-controls"
              _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
            >
              <Image
                alt="control"
                m="auto"
                maxH="36px"
                maxW="36px"
                src={ShareIcon}
                className="in-session-controls"
                _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
              />
            </Box>
            <Text>Screenshare</Text>
          </Box>
          <Box>
            <Box
              bg="#e2e2e2"
              h="60px"
              w="60px"
              d="flex"
              onClick={onClickChat}
              borderRadius="10"
              className="session-controls"
              _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
            >
              <Image
                alt="control"
                m="auto"
                maxH="36px"
                maxW="36px"
                src={ChatIcon}
                className="in-session-controls"
                _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
              />
            </Box>
            <Text>Chat</Text>
          </Box>
        </Box>
        <Box d="flex" justifyContent="space-between" width="13%">
          <Box>
            <Box
              bg="#4BB4AD"
              h="60px"
              w="60px"
              d="flex"
              onClick={onClickPlay}
              borderRadius="10"
              className="session-controls"
              _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
            >
              <Image
                alt="control"
                m="auto"
                maxH="36px"
                maxW="36px"
                src={TuneIcon}
                className="in-session-controls"
                _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
              />
            </Box>
            <Text>Ambient music</Text>
          </Box>
          <Box>
            <Box
              bg="#E06351"
              h="60px"
              w="60px"
              d="flex"
              onClick={onClickExit}
              borderRadius="10"
              className="session-controls"
              _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
            >
              <Image
                alt="control"
                m="auto"
                maxH="36px"
                maxW="36px"
                src={ExitIcon}
                className="in-session-controls"
                _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
              />
            </Box>
            <Text>Leave session</Text>
          </Box>
        </Box>
      </HStack>
    </Container>
  );
};

export default Room;
