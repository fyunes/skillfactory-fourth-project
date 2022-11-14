import {
  Box,
  Heading,
  Image,
  Text,
  Tag,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { db } from "../firebase/firebase";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

const ItemDetail = ({ id }) => {
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const toast = useToast();
  
  const getProduct = async (id) => {
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);
    return productSnap.data();
  };

  useEffect(() => {
    getProduct(id).then((data) => setProduct({ ...data, id: id }));
  }, [id]);

  return product ? (
    <Stack
      direction={{ base: "column", md: "row" }}
      width={{ base: "90%", lg: "60%" }}
      py={5}
      borderRadius={4}
      alignItems="center"
      h={{ lg: "55vh" }}
    >
      <Box
        display="flex"
        justifyContent="center"
        width={{ base: "100%", md: "60%" }}
      >
        <Box w="50%" h="100%" borderRadius={5}>
          <Image
            objectFit="cover"
            borderRadius={5}
            boxSize="100%"
            src={product.image}
          />
        </Box>
      </Box>
      <Box
        width={{ base: "100%", md: "70%", lg: "30%" }}
        borderWidth={1}
        borderRadius={5}
        pb={5}
        display="flex"
        flexDirection="column"
        alignItems={{ base: "center", lg: "start" }}
      >
        <Box display="flex" flexDirection="column" p={3} gap={3}>
          <Heading as="h2" size="md">
            {product.title}
          </Heading>
          <Tag
            w="fit-content"
            py={2}
            backgroundColor="#00a650"
            color="white"
            fontWeight="700"
          >
            FREE SHIPPING
          </Tag>
          <Text>
            {" "}
            <b>Color: </b> {product.color}
          </Text>
          <Text fontSize="3xl" fontWeight="700">
            ${product.price}
          </Text>
          <Tag w="fit-content">{product.category}</Tag>
          <Box fontSize="sm" mt={4}>
            <Text>Ships from Argentina</Text>
            <Text>Worldwide Delivery</Text>
            <Text>By UPS Global</Text>
          </Box>
        </Box>
        <Box mt={7}>
          <Box display="flex" gap={3} px={3}>
            <NumberInput
              mb={3}
              size="sm"
              maxW={20}
              defaultValue={1}
              min={1}
              max={product.stock}
              onChange={(e) => setCount(parseInt(e))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Text>Stock: {product.stock}</Text>
          </Box>
          <Box display="flex" gap={3} px={3}>
            <Link to={`/checkout/${id}/${count}`}>
            <Button colorScheme="green">Buy Now</Button>
            </Link>
            <Button
              onClick={() => {
                addToCart(product, count);
                toast({
                  title: `Success!`,
                  description: "The product has been added to your cart",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                  position: "top-right",
                });
              }}
              colorScheme="yellow"
            >
              Add To Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Stack>
  ) : (
    "Loading"
  );
};

export default ItemDetail;
