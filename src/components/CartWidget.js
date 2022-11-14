import { Flex, Icon, Text } from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const CartWidget = () => {
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  return (
    <Flex
      className="cart-icon"
      w={{ base: "20%", md: "20%" }}
      h="100%"
      mt="8px"
      justifyContent="right"
      alignItems="center"
    >
      <Link to="/cart">
        <Icon as={BiCart} w="30px" h="30px" />
      </Link>
      <Text>({cart.length})</Text>
    </Flex>
  );
};

export default CartWidget;
