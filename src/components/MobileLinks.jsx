import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { Globalcontext } from "../context/Globalcontext";
const MobileLinks = ({ to, name }) => {
  const { handleToggle } = useContext(Globalcontext);

  return (
    <>
      <Link
        as={NavLink}
        _activeLink={{ color: "blue.600" }}
        to={to}
        onClick={handleToggle}>
        {name}
      </Link>
    </>
  );
};

export default MobileLinks;
