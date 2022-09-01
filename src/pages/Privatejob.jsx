import { Button, Flex, Icon, Text, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
import { Place, Badge, Description as Desc } from "@mui/icons-material";
import { changeStatus, deleteJobs } from "../service/listing";
const api = import.meta.env.VITE_API_KEY;

const Privatejob = () => {
  const { id } = useParams();
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const toast = useToast();
  const { data, error, loading, setloading, setdata } = useFetch(
    `${api}/api/listings/${id}`,
    user
  );
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }

  const removeJob = async () => {
    deleteJobs(id, user, navigate, setloading, toast);
  };

  const { title, description, skills, location, user: users, status } = data;
  return (
    <Flex flexDir="column" alignItems="center" minH="90vh">
      <Flex
        boxShadow="sm"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
        bg="gray.100"
        mt={8}
        w={{ base: "300px", sm: "340px", md: "500px" }}
        padding="24px 18px">
        {status === "available" ? (
          <Button
            onClick={() =>
              changeStatus(user, toast, setloading, setdata, navigate, id)
            }
            fontWeight="normal"
            pos="relative"
            left={{ base: "60px", sm: "80px", md: "36" }}
            _hover={{ bg: "gray.100", textDecor: "underline" }}
            _focus={{ bg: "gray.100" }}>
            Set Not Available
          </Button>
        ) : (
          <Text
            color="gray.700"
            pos="relative"
            left={{ base: "60px", sm: "80px", md: "36" }}>
            No longer Available
          </Text>
        )}

        <Text fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}>{title}</Text>
        <Text fontSize="md" color="gray.600">
          Posted By: {users.email}
        </Text>
        <Text fontSize="lg" fontWeight="semibold">
          <Icon as={Badge} pos="relative" top={1} mr={2} />
          {skills}
        </Text>
        <Text fontSize="lg">
          <Icon as={Place} pos="relative" top={1} mr={2} />
          {location}
        </Text>
        <Text fontSize="lg">
          <Icon as={Desc} pos="relative" top={1} mr={2} />
          {description}
        </Text>
        <Flex justifyContent="center" gap={6} mt="6">
          <Button
            fontWeight="normal"
            bg="red.500"
            color="white"
            _hover={{ bg: "red.500", boxShadow: "2xl" }}
            _focus={{ bg: "red.500" }}
            onClick={removeJob}>
            Delete
          </Button>
          <Button
            fontWeight="normal"
            bg="black"
            color="white"
            _hover={{ bg: "black", boxShadow: "2xl" }}
            _focus={{ bg: "black" }}
            onClick={() => navigate(`/job/edit/${id}`)}>
            Edit
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Privatejob;
