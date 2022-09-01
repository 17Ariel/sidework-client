import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Flex, useToast, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Joblist from "../components/Joblist";
import { search } from "../service/listing";
import { toaster } from "../utils/toaster";
const api = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [inputs, setinputs] = useState("");
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const toast = useToast();
  const { data, error, loading, setdata } = useFetch(
    `${api}/api/listings`,
    user
  );

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate, inputs, data]);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }

  const searchJob = async (e) => {
    e.preventDefault();
    const searches = /^[A-Za-z-\s,.]+$/;
    if (inputs === "") {
      return toaster(toast, "Please Enter your search", "warning");
    }
    if (!inputs.match(searches)) {
      return toaster(toast, "Invalid search query", "warning");
    }
    search(user, inputs, toast, setdata);
  };

  return (
    <Flex flexDir="column" alignItems="center" minH="90vh">
      <Flex
        onSubmit={searchJob}
        as="form"
        mt={8}
        justifyContent="center"
        alignItems="center"
        bg="white"
        border="2px"
        borderColor="gray.300"
        padding="4px 12px"
        borderRadius="4px"
        boxShadow="sm"
        h="14"
        w={{ base: "300px", md: "400px" }}>
        <Input
          placeholder="Search"
          focusBorderColor="none"
          border="none"
          value={inputs}
          onChange={(e) => setinputs(e.target.value)}
        />
        <Button
          type="submit"
          bg="blue.600"
          _hover={{ bg: "blue.600", boxShadow: "2xl" }}
          _focus={{ bg: "blue.600" }}>
          <SearchIcon color="white" />
        </Button>
      </Flex>
      <Flex justifyContent="center" gap={4} mt={10} flexWrap="wrap">
        <Joblist jobs={data} />
      </Flex>
    </Flex>
  );
};

export default Home;
