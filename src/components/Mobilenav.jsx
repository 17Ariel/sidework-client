import { Flex } from "@chakra-ui/react";
import React from "react";
import MobileLinks from "./MobileLinks";
import Profile from "./Profile";

const Mobilenav = ({ user, navigate }) => {
  return (
    <>
      {user === null ? (
        <Flex
          display={{ base: "flex", sm: "flex", md: "none" }}
          flexDir="column"
          gap={8}
          h="20vh"
          boxShadow="md"
          zIndex={1}
          position="sticky"
          top="10vh"
          justifyContent="center"
          bg="white"
          alignItems="center">
          <MobileLinks to="/" name="Signin" />
          <MobileLinks to="/signup" name="Signup" />
        </Flex>
      ) : (
        <>
          <Flex
            flexDir="column"
            gap={8}
            h="50vh"
            boxShadow="md"
            zIndex={1}
            position="sticky"
            top="10vh"
            justifyContent="center"
            bg="white"
            alignItems="center">
            <MobileLinks to="/home" name="Home" />
            <MobileLinks to="/create/jobs" name="Create" />
            <MobileLinks to="/jobs" name="MyJobs" />
            <MobileLinks to="/saved" name="Saved" />
            <Profile user={user} navigate={navigate} />
          </Flex>
        </>
      )}
    </>
  );
};

export default Mobilenav;
