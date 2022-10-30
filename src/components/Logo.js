import { Box, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Box 
      w='100%'
      h='100px'
      justifyContent="center"
      >
      <Image
        w="200px"
        src="https://cdn.discordapp.com/attachments/997992289425182791/1036256575809146880/logo150_horizontal.png"
        alt="Logo"
      />
    </Box>
  );
};

export default Logo;