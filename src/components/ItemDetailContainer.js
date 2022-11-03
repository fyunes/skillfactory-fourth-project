import { Box } from "@chakra-ui/react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({id}) => {
  return (
    <Box w="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">

      <ItemDetail id={id}/>
      
    </Box>
  );
};

export default ItemDetailContainer;