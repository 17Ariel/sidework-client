import {
  Box,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Icon,
} from "@chakra-ui/react";
import { ArrowDropDown, Logout } from "@mui/icons-material";
import { useContext, useRef } from "react";
import { Globalcontext } from "../context/Globalcontext";
import useFetch from "../hooks/useFetch";
import { logout } from "../service/auth";
import { convertEmail } from "../utils/profile";
const api = import.meta.env.VITE_API_KEY;

const Profile = ({ user, navigate }) => {
  const { data } = useFetch(`${api}/api/user`, user);
  const { email } = data;
  const initialFocusRef = useRef();
  const { handleToggle } = useContext(Globalcontext);

  return (
    <>
      <Popover
        initialFocusRef={initialFocusRef}
        placement="bottom"
        closeOnBlur={false}>
        <PopoverTrigger>
          <Box display="flex" cursor="pointer">
            <Box
              boxShadow="2xl"
              cursor="pointer"
              display="grid"
              placeItems="center"
              color="white"
              bg="blue.600"
              width="30px"
              height="30px"
              borderRadius="full">
              <Text fontWeight="normal">{convertEmail(email)}</Text>
            </Box>
            <Icon as={ArrowDropDown} />
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverBody
            display="flex"
            flexDir="column"
            gap={2}
            _hover={{ outline: "none" }}>
            <Text>{email}</Text>
            <Button
              bg="white"
              _hover={{ bg: "white" }}
              _focus={{ bg: "white" }}
              w={20}
              fontWeight="normal"
              padding="10px 8px"
              onClick={() => logout(navigate, handleToggle)}>
              <Icon as={Logout} />
              Logout
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Profile;
