import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Joblist from "../components/Joblist";
const api = import.meta.env.VITE_API_KEY;

const Myjobs = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  const { data, error, loading } = useFetch(
    `${api}/api/listings/mylisting`,
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

  return (
    <Flex flexDir="column" alignItems="center" minH="90vh">
      <Flex justifyContent="center" gap={4} mt={10} flexWrap="wrap">
        <Joblist jobs={data} />
      </Flex>
    </Flex>
  );
};

export default Myjobs;
