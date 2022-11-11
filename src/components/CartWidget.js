import { Flex, Icon } from "@chakra-ui/react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const CartWidget = () => {
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
      </Flex>
  );
};

export default CartWidget;
