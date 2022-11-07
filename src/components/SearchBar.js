import { Box, Input } from "@chakra-ui/react";

const SearchBar = () => {
  return (
    <Box className="searchBar"
      w={{base:'95%',sm:'100%'}}
    >
      <Input 
        fontSize={{base:'0.8em', sm:'1.1em'}}
        _placeholder={{color:'gray.400'}} 
        bg='gray.100' 
        variant='filled' placeholder='Search products'
        size={{base:'sm',md:'md'}} mt='8px'
        boxShadow='md'
        />
    </Box>
  );
};

export default SearchBar;