import { Box, Image } from '@chakra-ui/react';
import Logo_h from '../images/logo_h.png';

const Logo = () => {
  return (
    <Box
      display='flex'
      align='center' justifyContent='flex-end'
    >
      <Box >
        <Image
          w={{ base: '80px', sm:'100px', md: '120px' }}
          src={Logo_h}
          alt='Logo'
        />
      </Box>      
    </Box>
  );
};

export default Logo;
