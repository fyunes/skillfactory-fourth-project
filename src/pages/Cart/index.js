import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { CartContext } from "../../context/CartProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();
  const { cart, updateCart, removeById, removeAll } = cartContext;

  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      p={5}
      gap={2}
      alignItems="center"
      flexDirection="column"
      borderRadius={5}
    >
      <Button colorScheme="yellow" onClick={() => navigate("/products")}>
        Back to products
      </Button>
      <Box
        w="70%"
        display="flex"
        alignItems="center"
        flexDirection="column"
        p={5}
        gap={5}
        borderRadius={5}
      >
        <Box w="85%" display="flex" justifyContent="space-between">
          <Heading size="lg" as="h2">
            Your cart
          </Heading>
          <Button
            colorScheme="red"
            onClick={() => {
              return window.confirm("Are you sure?") ? removeAll() : null;
            }}
          >
            Remove All
          </Button>
        </Box>
        {cart.map((product) => {
          return (
            <Box
              display="flex"
              justifyContent="space-between"
              borderRadius={10}
              alignItems="center"
              borderWidth={1}
              px={5}
              py={2}
              gap={3}
              borderColor="gray.300"
              w="90%"
              h="200px"
              key={product.id}
            >
              <Box
                w="20%"
                h="95%"
                alignSelf="center"
                borderWidth={1}
                borderColor="gray.100"
                borderRadius={10}
              >
                <Image
                  boxSize="100%"
                  objectFit="contain"
                  borderRadius={10}
                  src={product.image}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap={2}
              >
                <Text fontSize="lg" fontWeight="700">
                  {product.title}
                </Text>
                <Text>Product ID:</Text>
                <Text>{product.id}</Text>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Text fontWeight="bold">Color</Text>
                <Text>
                  {product.color[0]
                    .toUpperCase()
                    .concat(product.color.substring(1))}
                </Text>
              </Box>
              <NumberInput
                mb={3}
                size="sm"
                alignSelf="center"
                maxW={20}
                defaultValue={product.count}
                min={1}
                max={product.stock}
                onChange={(e) => updateCart(product.id, e)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Text fontWeight="bold">Total</Text>
                <Text>$ {(product.price * product.count).toFixed(2)}</Text>
              </Box>
              <Button
                onClick={() => removeById(product.id)}
                colorScheme="orange"
                alignSelf="center"
              >
                Remove this item
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Cart;
