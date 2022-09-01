import { NavLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
const Links = ({ to, name }) => {
  return (
    <>
      <Link as={NavLink} _activeLink={{ color: "blue.600" }} to={to}>
        {name}
      </Link>
    </>
  );
};

export default Links;
