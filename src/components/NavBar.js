import Logo from './Logo'
import { Box } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box className="NavBar">
      <Logo />
      <h3>NAVBAR</h3>     
    </Box>
  );
};

export default NavBar;