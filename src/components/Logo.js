import { Box, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Box>
      <Image
        /* w={{ base: "80px", sm: "100px", md: "100px" }} */
        src="../images/logo150.png"
        alt="Logo"
      />
    </Box>
  );
};

export default Logo;