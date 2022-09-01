import React, { useEffect, useState } from "react";
import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { signin } from "../service/auth";
import Loading from "../components/Loading";

const Signin = () => {
  const user = localStorage.getItem("user");

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const handleSignin = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    signin(userData, toast, navigate, setloading);
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Flex h="90vh" justifyContent="center" alignItems="center">
      <Flex
        as="form"
        onSubmit={handleSignin}
        padding="26px 12px"
        flexDir="column"
        alignItems="center"
        gap={6}
        bg="gray.50"
        boxShadow="md"
        w={{ base: 300, md: 380 }}>
        <Text fontSize="3xl">Signin</Text>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            focusBorderColor="blue.600"
            bg="white"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            focusBorderColor="blue.600"
            bg="white"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </FormControl>
        <Button
          fontWeight="normal"
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

export default Signin;
