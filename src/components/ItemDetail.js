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
} from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

const ItemDetail = ({ id }) => {
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const [count, setCount] = useState(1);

  const getProduct = async (id) => {
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);
    return productSnap.data();
  };

  useEffect(() => {
    getProduct(id).then((data) => setProduct({ ...data, id: id }));
  }, [id]);

  return product ? (
    <Stack direction="row" width="60%" py={5} borderRadius={4} h="55vh">
      <Box display="flex" justifyContent="center" width="60%">
        <Box w="50%" h="100%" borderRadius={5}>
          <Image
            objectFit="cover"
            borderRadius={5}
            boxSize="100%"
            src={product.image}
          />
        </Box>
      </Box>
      <Box width="30%" borderWidth={2} borderRadius={5}>
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
            <b>Color: </b>{" "}
            {product.color[0].toUpperCase().concat(product.color.substring(1))}
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
              onChange={(e) => setCount(e)}
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
            <Button colorScheme="green">Buy Now</Button>
            <Button
              onClick={() => {
                addToCart(product, count);
                navigate("/cart");
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
