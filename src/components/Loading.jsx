import React from "react";
import { Spinner, Stack } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Stack display="flex" justifyContent="center" alignItems="center" h="87vh">
      <Spinner
        thickness="8px"
        speed="0.5s"
        emptyColor="blue.600"
        color="primary.100"
        size="xl"
      />
    </Stack>
  );
};

export default Loading;
