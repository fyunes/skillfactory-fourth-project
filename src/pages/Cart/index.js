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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CartContext } from "../../context/CartProvider";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cart, updateCart, removeById, removeAll } = cartContext;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  let total = cart.length
    ? cart
        .map((product) => product.price * product.count)
        .reduce((a, b) => {
          return a + b;
        }, 0)
        .toFixed(2)
    : 0;
  let totalUnits =
    cart.length > 1
      ? cart.map((product) => parseInt(product.count)).reduce((a, b) => a + b, 0)
      : cart[0].count;

  return (
    <>
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
        <Box w="100%" display="flex" justifyContent="center">
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
                Your cart ({cart.length} {cart.length > 1 ? "items" : "item"})
              </Heading>
              <Button colorScheme="red" variant="outline" onClick={onOpen}>
                Remove All
              </Button>
            </Box>
            {cart.map((product) => {
              const total = (product.price * product.count).toFixed(2);
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
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
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
                    <Text>$ {total}</Text>
                  </Box>
                  <Button
                    onClick={() => removeById(product.id)}
                    colorScheme="red"
                    alignSelf="center"
                  >
                    Remove this item
                  </Button>
                </Box>
              );
            })}
          </Box>
          <Box w="20%" display="flex" flexDirection="column" gap={2}>
            <Box
              display="flex"
              flexDirection="column"
              borderWidth={1}
              mt={20}
              borderColor="gray.300"
              h="10rem"
              p={5}
              gap={5}
              borderRadius={10}
              w="100%"
            >
              <Box display="flex" justifyContent="space-between">
                <Text fontSize="sm">Items ({cart.length})</Text>
                <Text fontSize="sm">Units ({totalUnits})</Text>
                <Text>$ {total}</Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text fontSize="sm">Shipping</Text>
                <Text>$0</Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text fontWeight="bold" fontSize="xl">
                  Total:
                </Text>
                <Text>${total}</Text>
              </Box>
            </Box>
            <Link>
              <Button w="100%" colorScheme="green">
                Checkout
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>

      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Please confirm</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to remove all the items from your cart?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button
              onClick={() => {
                removeAll();
                onClose();
              }}
              colorScheme="red"
              ml={3}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Cart;
