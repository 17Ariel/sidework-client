import { Button, Flex, Icon, Link, Text, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
import { Place, Badge, Description as Desc } from "@mui/icons-material";
import { saved } from "../service/saved";
const api = import.meta.env.VITE_API_KEY;

const Job = () => {
  const { id } = useParams();
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const toast = useToast();
  const { data, error, loading, setloading } = useFetch(
    `${api}/api/listings/${id}`,
    user
  );
  const { data: save } = useFetch(`${api}/api/saved/${id}`, user);
  const [listingId] = save;

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
  const { title, description, skills, location, email, user: users } = data;

  const savedJobs = async () => {
    saved(user, toast, navigate, setloading, id);
  };

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
        w="500px"
        padding="24px 18px">
        <Text fontSize="4xl">{title}</Text>
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
            bg="blue.600"
            color="white"
            _hover={{ bg: "blue.600", boxShadow: "2xl" }}
            _focus={{ bg: "blue.600" }}
            onClick={savedJobs}>
            {listingId ? "Unsaved" : "Saved"}
          </Button>
          <Link
            textAlign="center"
            mt={2}
            href={`mailto: ${email}`}
            fontWeight="normal"
            _hover={{ color: "blue.600", textDecor: "underline" }}>
            Send Email
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Job;
