import { Container, Button, Box } from "@chakra-ui/react";
import { BrowserRouter, Link, useHistory } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <Container
      position="fixed"
      mt="22"
      maxW="440px"
      left="35%"
      fontWeight="bolder"
      zIndex="10"
      boxShadow="0px 2px 34px rgba(0, 0, 0, 0.25)"
      borderRadius="12px"
    >
      <Box
        bg="#4BB4AD"
        borderRadius="12px"
        p="10"
        d="flex"
        alignItems="center"
        textAlign="center"
      >
        <BrowserRouter>
          <Link to="/" className="nav-items">
            {" "}
            Home
          </Link>
          <Link to="/session" className="nav-items">
            {" "}
            Find a group
          </Link>
          <Link to="/session/go/record-goals" className="nav-items">
            {" "}
            Join
          </Link>
          <Link to="#reviews" className="nav-items">
            {" "}
            Testimonials
          </Link>
        </BrowserRouter>
      </Box>
    </Container>
  );
};

export default NavBar;
