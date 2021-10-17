import { Box, Container, HStack, Stack, Text } from "@chakra-ui/layout";
import GoalsIcon from "../assets/GoalsIcon.svg";
import PartIcon from "../assets/PartIcon.svg";
import MicIcon from "../assets/MicIcon.svg";
import CamIcon from "../assets/CamIcon.svg";
import ShareIcon from "../assets/ShareIcon.svg";
import ChatIcon from "../assets/ChatIcon.svg";
import TuneIcon from "../assets/TuneIcon.svg";
import ExitIcon from "../assets/ExitIcon.svg";
import MinIcon from "../assets/MinIcon.svg";
import MaxIcon from "../assets/MaxIcon.svg";
import MidIcon from "../assets/MidIcon.svg";
import React, { useState } from "react";
import avatarStream from "../assets/avatarStream.mp4";
import { Image } from "@chakra-ui/image";
import { useHistory } from "react-router-dom";
import Chat from "../components/Live/Chat";
import Goals from "../components/Live/Goals";
import Participants from "../components/Live/Participants";
import vid from "../assets/vid.png";
const Room = () => {
  const history = useHistory();
  const onClickExit = () => {
    history.push("/exit-session/thanks");
  };
  const [chatVisible, setchatVisible] = useState(false);
  const [goalVisible, setgoalVisible] = useState(false);
  const [partVisible, setpartVisible] = useState(false);
  const [muted, setmuted] = useState(false);
  const [camOn, setcamOn] = useState(false);
  const [playMusic, setplayMusic] = useState(false);
  const [screenVisible, setscreenVisible] = useState(false);
  const onClickCam = () => {
    setcamOn(!camOn);
  };
  const onClickChat = () => {
    setchatVisible(!chatVisible);
    setgoalVisible(false);
    setpartVisible(false);
  };
  const onClickGoals = () => {
    setgoalVisible(!goalVisible);
    setchatVisible(false);
    setpartVisible(false);
  };
  const onClickMic = () => {
    setmuted(!muted);
  };
  const onClickParticipants = () => {
    setpartVisible(!partVisible);
    setchatVisible(false);
    setgoalVisible(false);
  };
  const onClickPlay = () => {
    setplayMusic(!screenVisible);
  };
  const onClickShare = () => {
    setscreenVisible(!screenVisible);
  };
  return (
    <Container>
      <Box>
        <video autoPlay loop muted className="backStream" id="backStream">
          <source src={avatarStream} type="video/mp4" />
        </video>
      </Box>
      <Stack maxW="150px" position="fixed" left="60px" top="40px">
        <Box
          borderRadius="7"
          bg="#E06351"
          p="4"
          boxShadow="0px 0px 20px rgba(0, 0, 0, 0.35)"
        >
          <Text textAlign="center" fontWeight="bold">
            23:46
          </Text>
          <Text>Time to focus!</Text>
        </Box>
        <Box
          borderRadius="7"
          bg="#F4D0C2"
          p="4"
          boxShadow="0px 0px 20px rgba(0, 0, 0, 0.35)"
        >
          <Text textAlign="center" fontWeight="bold">
            4:45
          </Text>
          <Text>Upcoming break</Text>
        </Box>
      </Stack>
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
        <Box d="flex" justifyContent="space-between" width="17%">
          <Box>
            <Box
              bg="#e2e2e2"
              h="60px"
              w="60px"
              d="flex"
              onClick={onClickGoals}
              borderRadius="10"
              className="session-controls"
              m="0 auto"
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
            <Text fontSize="14">Goals</Text>
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
              m="0 auto"
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
            <Text fontSize="14">Participants</Text>
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
              m="0 auto"
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
            <Text fontSize="14">Mute</Text>
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
              m="0 auto"
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
            <Text fontSize="14">Stop video</Text>
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
              m="0 auto"
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
            <Text fontSize="14">Screenshare</Text>
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
              m="0 auto"
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
            <Text fontSize="14">Chat</Text>
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
              m="0 auto"
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
            <Text fontSize="14">Ambient music</Text>
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
              m="0 auto"
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
            <Text fontSize="14">Leave session</Text>
          </Box>
        </Box>
      </HStack>
      <Stack
        borderRadius="20px"
        position="fixed"
        bottom="135"
        left="14"
        bg="white"
      >
        <Image src={vid} />
      </Stack>

      {chatVisible ? (
        <Box position="fixed" right="3%">
          <Chat />
        </Box>
      ) : undefined}
      {goalVisible ? (
        <Box position="fixed" right="3%">
          <Goals />
        </Box>
      ) : undefined}
      {partVisible ? (
        <Box position="fixed" right="3%">
          <Participants />
        </Box>
      ) : undefined}
    </Container>
  );
};

export default Room;
