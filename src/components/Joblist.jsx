import React from "react";
import { Flex, Icon, Text, Link as Links } from "@chakra-ui/react";
import { GeoAlt, PersonWorkspace } from "react-bootstrap-icons";
// import { Place, Badge } from "@mui/icons-material";
import { Link, matchPath, useLocation } from "react-router-dom";
const Joblist = ({ jobs }) => {
  const { pathname } = useLocation();
  const ispublic = matchPath("/home", pathname);
  return jobs.length > 0 ? (
    jobs.map((job) => (
      <Flex
        key={job.id}
        boxShadow="sm"
        bg="gray.100"
        flexDir="column"
        gap={2}
        borderRadius="lg"
        padding="22px 14px"
        w={{ base: "300px", md: "400px" }}
        mb={2}>
        {ispublic ? (
          <Links
            as={Link}
            fontSize="2xl"
            to={`/job/${job.id}`}
            _hover={{ color: "blue.600", textDecor: "none" }}>
            {job.title}
          </Links>
        ) : (
          <Links
            as={Link}
            fontSize="3xl"
            to={`/job/private/${job.id}`}
            _hover={{ color: "blue.600", textDecor: "none" }}>
            {job.title}
          </Links>
        )}

        <Text fontSize="large" fontWeight="semibold">
          <Icon as={PersonWorkspace} mr={2} pos="relative" top={1} />
          {job.skills}
        </Text>
        <Text fontSize="large">
          <Icon as={GeoAlt} mr={2} mt={1} pos="relative" top={1} />
          {job.location}
        </Text>
        {ispublic ? <Text>Posted by: {job.user?.email}</Text> : <></>}
      </Flex>
    ))
  ) : (
    <Flex>
      <Text mt={8}>No Jobs</Text>
    </Flex>
  );
};

export default Joblist;
