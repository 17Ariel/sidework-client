import React, { useContext, useEffect, useState } from "react";
import { Menu as MenuIcons } from "@mui/icons-material";
import { Flex, Icon } from "@chakra-ui/react";
import Logo from "./Logo";
import Links from "./Links";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Mobilenav from "./Mobilenav";
import { Globalcontext } from "../context/Globalcontext";
const Navbar = () => {
  const { isOpen, handleToggle } = useContext(Globalcontext);
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  useEffect(() => {}, [navigate]);

  return (
    <>
      <Flex
        zIndex={2}
        gap={{ base: 120, sm: 180, md: 200, lg: 400 }}
        pos="sticky"
        top={0}
        w="100%"
        h="10vh"
        bg="white"
        boxShadow="sm"
        justifyContent="center"
        alignItems="center">
        <Logo />
        {user === null ? (
          <>
            <Flex gap={8} display={{ base: "none", sm: "none", md: "flex" }}>
              <Links to="/" name="Signin" />
              <Links to="/signup" name="Signup" />
            </Flex>
            <Icon
              onClick={handleToggle}
              cursor="pointer"
              as={MenuIcons}
              color="blue.600"
              fontSize="3xl"
              display={{ base: "block", sm: "block", md: "none" }}
            />
          </>
        ) : (
          <>
            <Flex
              gap={8}
              justifyContent="center"
              alignItems="center"
              display={{ base: "none", sm: "none", md: "flex" }}>
              <Links to="/home" name="Home" />
              <Links to="/create/jobs" name="Create" />
              <Links to="/jobs" name="MyJobs" />
              <Links to="/saved" name="Saved" />
              <Profile user={user} navigate={navigate} />
            </Flex>
            <Icon
              onClick={handleToggle}
              as={MenuIcons}
              cursor="pointer"
              color="blue.600"
              fontSize="3xl"
              display={{ base: "block", sm: "block", md: "none" }}
            />
          </>
        )}
      </Flex>
      {isOpen && (
        <Mobilenav action={handleToggle} user={user} navigate={navigate} />
      )}
    </>
  );
};

export default Navbar;
