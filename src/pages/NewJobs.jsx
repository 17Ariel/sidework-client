import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { addJobs } from "../service/listing";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const NewJobs = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const toast = useToast();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [skills, setskills] = useState("");
  const [location, setlocation] = useState("");
  const [email, setemail] = useState("");

  const [loading, setloading] = useState(false);

  const createJobs = async (e) => {
    e.preventDefault();
    const jobData = { title, description, skills, location, email };
    addJobs(user, jobData, toast, navigate, setloading);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Flex h="90vh" justifyContent="center" alignItems="center">
      <Flex
        mt={6}
        as="form"
        onSubmit={createJobs}
        padding="18px 12px"
        flexDir="column"
        alignItems="center"
        gap={2}
        bg="gray.50"
        boxShadow="md"
        w={{ base: 300, md: 380 }}>
        <Text fontSize="2xl">New Job</Text>
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            focusBorderColor="blue.600"
            bg="white"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            focusBorderColor="blue.600"
            bg="white"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Skills</FormLabel>
          <Input
            type="text"
            focusBorderColor="blue.600"
            bg="white"
            value={skills}
            onChange={(e) => setskills(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Location</FormLabel>
          <Input
            type="text"
            focusBorderColor="blue.600"
            bg="white"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            focusBorderColor="blue.600"
            bg="white"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </FormControl>
        <Button
          w={{ base: 280, md: 360 }}
          type="submit"
          bg="blue.600"
          color="white"
          _hover={{ bg: "blue.700" }}
          _focus={{ bg: "blue.700" }}>
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default NewJobs;
