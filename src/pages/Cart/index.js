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
    cart.length > 0
      ? cart
          .map((product) => parseInt(product.count))
          .reduce((a, b) => a + b, 0)
      : cart.forEach((product) => product.count);

  return (
    <Box w="100%" display="flex" flexDirection="column" overflow="hidden">
      <Box
        w="100%"
        overflow="hidden"
        maxW="100%"
        minH={{ md: "60vh" }}
        display="flex"
        p={5}
        gap={2}
        alignItems="center"
        flexDirection="column"
        borderRadius={5}
      >
        <Box w="100%" display="flex" justifyContent="center">
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            flexDirection="column"
            p={5}
            gap={5}
            borderRadius={5}
          >
            <Box
              w={{ base: "90%", lg: "55%" }}
              display="flex"
              gap={2}
              flexDirection={{base: 'column', md: 'row'}}
              justifyContent="space-between"
              alignItems={{base: 'center'}}
              ml={{ base: 0, lg: "9rem" }}
              alignSelf={{ base: "center", lg: "start" }}
            >
              <Heading ml={{base: 0, xl: 20}} size="lg" as="h2">
                Your cart ({cart.length} {cart.length === 1 ? "item" : "items"})
              </Heading>
              {cart.length ? (
                <Button mr={{base: 0, lg:20}} colorScheme="red" variant="outline" onClick={onOpen}>
                  Remove all items
                </Button>
              ) : null}
            </Box>

            <Box
              display="flex"
              w="100%"
              p={5}
              justifyContent="center"
              flexDirection={{ base: "column", lg: "row" }}
              gap={{ base: 1, lg: 5 }}
            >
              <Box
                display="flex"
                gap={5}
                w={{ base: "100%", lg: "70%" }}
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
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
                      flexDirection={{ base: "column", md: "row" }}
                      py={2}
                      gap={3}
                      borderColor="gray.300"
                      w={{ base: "100%", xl: "70%" }}
                      key={product.id}
                    >
                      <Box
                        w={{ base: "40%", sm:'30%', lg: "20%" }}
                        h="90%"
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
                      <Box display="flex" gap={5}>
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="center"
                          alignItems="center"
                          gap={2}
                        >
                          <Text
                            fontSize={{ base: "md", md: "lg" }}
                            fontWeight="700"
                            textAlign='center'
                          >
                            {product.title}
                          </Text>
                          <Text fontSize={{ base: "sm", md: "md" }}>
                            Product ID:
                          </Text>
                          <Text fontSize={{ base: "sm", md: "md" }}>
                            {product.id}
                          </Text>
                        </Box>
                      </Box>
                      <Box display="flex" gap={7}>
                        <Box
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                        >
                          <Text
                            fontSize={{ base: "sm", md: "md" }}
                            fontWeight="bold"
                          >
                            Color
                          </Text>
                          <Text fontSize={{ base: "sm", md: "md" }}>
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
                          <Text
                            fontSize={{ base: "sm", md: "md" }}
                            fontWeight="bold"
                          >
                            Total
                          </Text>
                          <Text fontSize={{ base: "sm", md: "md" }}>
                            $ {total}
                          </Text>
                        </Box>
                      </Box>
                      <Button
                        onClick={() => removeById(product.id)}
                        size="sm"
                        colorScheme="red"
                        alignSelf="center"
                      >
                        X
                      </Button>
                    </Box>
                  );
                })}
              </Box>
              {cart.length ? (
                <Box
                  alignSelf={{ base: "center", lg: "start" }}
                  w={{ base: "90%", lg: "30%" }}
                  display="flex"
                  flexDirection="column"
                  gap={2}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    borderWidth={1}
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
                  <Link to="/checkout">
                    <Button w="100%" colorScheme="green">
                      Checkout
                    </Button>
                  </Link>
                </Box>
              ) : null}
            </Box>
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
    </Box>
  );
};

export default Cart;
