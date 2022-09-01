import React from "react";
import { Flex } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import Savelist from "../components/Savelist";
const api = import.meta.env.VITE_API_KEY;

const Saved = () => {
  const user = localStorage.getItem("user");
  const { data, setloading, setdata } = useFetch(`${api}/api/saved`, user);

  return (
    <Flex flexDir="column" alignItems="center" minH="90vh">
      <Flex justifyContent="center" gap={4} mt={10} flexWrap="wrap">
        <Savelist
          saved={data}
          user={user}
          setloading={setloading}
          setdata={setdata}
        />
      </Flex>
    </Flex>
  );
};

export default Saved;
