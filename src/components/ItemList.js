import { Box } from "@chakra-ui/react";
import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
  return (
    <Box
      w={{ base: "100%", sm:'85%', md: "75%", xl: "60%" }}
      py={5}
      px={{base: 1, sm: 3, md: 3, lg: 4, xl: 5}}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap={7}
    >
      {!products
        ? "Loading"
        : products.map((product) => {
            return (
              <Link key={product.id} to={`/products/${product.id}`}>
                <Item product={product} />
              </Link>
            );
          })}
    </Box>
  );
};

export default ItemList;
