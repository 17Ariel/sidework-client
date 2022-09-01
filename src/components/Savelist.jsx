import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Icon, Text, useToast } from "@chakra-ui/react";
import { Place, Badge, Bookmark } from "@mui/icons-material";
import { unsaved } from "../service/saved";

const Savelist = ({ saved, user, setloading, setdata }) => {
  const toast = useToast();
  const navigate = useNavigate();
  return saved.length > 0 ? (
    saved.map((save) => (
      <Flex
        key={save.listing.id}
        boxShadow="sm"
        bg="gray.100"
        flexDir="column"
        gap={2}
        borderRadius="lg"
        padding="22px 14px"
        w={{ base: "300px", md: "400px" }}>
        <Flex justifyContent="space-between">
          <Text fontSize="3xl">{save.listing.title}</Text>
          <Icon
            as={Bookmark}
            pos="relative"
            top={3}
            onClick={() =>
              unsaved(
                user,
                toast,
                navigate,
                setloading,
                save.listing.id,
                setdata
              )
            }
          />
        </Flex>
        <Text fontSize="large">
          <Icon as={Badge} mr={2} pos="relative" top={1} />
          {save.listing.skills}
        </Text>
        <Text fontSize="large">
          <Icon as={Place} mr={2} mt={1} pos="relative" top={1} />
          {save.listing.location}
        </Text>
      </Flex>
    ))
  ) : (
    <>No saved jobs yet</>
  );
};

export default Savelist;
