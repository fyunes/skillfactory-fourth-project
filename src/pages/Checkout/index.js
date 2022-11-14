import {
  Box,
  Input,
  Divider,
  Text,
  Button,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartProvider";
import { db } from "../../firebase/firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

const Checkout = () => {
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const { cart, removeAll, purchases, setPurchases } = cartContext;
  const toast = useToast();
  const { id } = useParams();
  const { qty } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  const getProductById = async (id) => {
    const productRef = doc(db, "products", id);
    const snapshot = await getDoc(productRef);
    const newProduct = { ...snapshot.data(), count: parseInt(qty), id: id };
    return newProduct;
  };

  useEffect(() => {
    if (id) {
      getProductById(id).then((newProduct) => setSingleProduct(newProduct));
    }
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      try {
        setPurchases([...purchases, singleProduct]);
        let productsInDB = await getDocs(collection(db, "products"));
        let targetProduct = productsInDB.docs.find(
          (prodFromDB) => prodFromDB.id === id
        );
        await setDoc(doc(db, "products", id), {
          ...targetProduct.data(),
          stock: targetProduct.data().stock - qty,
        });
        toast({
          title: `Success!`,
          description: "You have successfully purchased your products!",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        if (cart.length) {
          cart.map(async (product) => {
            let productRef = doc(db, "products", product.id);
            let productsInDB = await getDocs(collection(db, "products"));
            let targetProduct = productsInDB.docs.find(
              (prodFromDB) => prodFromDB.id === product.id
            );
            await setDoc(productRef, {
              ...targetProduct.data(),
              stock: targetProduct.data().stock - product.count,
            });
          });
          setPurchases([...purchases, ...cart]);
          toast({
            title: `Success!`,
            description: "You have successfully purchased your products!",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top-right",
          });
          removeAll();
          setTimeout(() => navigate("/"), 2000);
        } else {
          toast({
            title: `Error!`,
            description: "Your cart is empty!",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top-right",
          });
        }
      } catch (err) {
        toast({
          title: `Error`,
          description: "Something went wrong, try again",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
        console.error(err);
      }
    }
  };

  return (
    <Box w="100%" display="flex" justifyContent="center" gap={7} p={5}>
      <Box
        w="25%"
        display="flex"
        flexDirection="column"
        gap={2}
        mt={5}
        borderRadius={10}
        shadow="md"
        h="fit-content"
        p={5}
      >
        {!id ? (
          cart.map((product) => {
            return (
              <Box
                p={2}
                display="flex"
                justifyContent="space-between"
                key={product.id}
              >
                <Text w="250px">{product.title}</Text>
                <Text>x{product.count}</Text>
                <Text fontWeight="bold">
                  $ {(product.count * product.price).toFixed(2)}
                </Text>
              </Box>
            );
          })
        ) : (
          <Box p={2} display="flex" justifyContent="space-between">
            <Text>{singleProduct.title}</Text>
            <Text>x{singleProduct.count}</Text>
            <Text fontWeight="bold">
              $ {(singleProduct.count * singleProduct.price).toFixed(2)}
            </Text>
          </Box>
        )}
        <Divider />
        <Box alignSelf="end" mr={3}>
          <Text fontSize="lg" fontWeight="bold" textAlign="center">
            Total
          </Text>
          <Text fontWeight="bold" fontSize="lg">
            $
            {id
              ? (singleProduct.price * singleProduct.count).toFixed(2)
              : cart
                  .map((product) => product.count * product.price)
                  .reduce((a, b) => a + b, 0)
                  .toFixed(2)}
          </Text>
        </Box>
      </Box>

      <Box
        w="25%"
        display="flex"
        justifyContent="center"
        borderRadius={10}
        alignItems="center"
        shadow="lg"
        pb={5}
        bg="linear-gradient(to top, #f7faff, #f7faff, #f6faff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff)"
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <Box
            display="flex"
            w="100%"
            flexDirection="column"
            alignItems="stretch"
            p={5}
            gap={7}
          >
            <FormControl w="100%" display="flex" flexDirection="column" gap={2}>
              <Box display="flex" gap={2}>
                <Input
                  id="firstname"
                  type="text"
                  placeholder="First Name"
                  _placeholder={{ color: "gray.400" }}
                />
                <Input
                  id="lastname"
                  type="text"
                  placeholder="Last Name"
                  _placeholder={{ color: "gray.400" }}
                />
              </Box>
              <Box display="flex" flexDirection="column" gap={2}>
                <Input
                  id="email"
                  type="text"
                  placeholder="E-mail address"
                  _placeholder={{ color: "gray.400" }}
                />
              </Box>
              <Box display="flex" gap={2}>
                <Input
                  id="country"
                  type="text"
                  placeholder="Country"
                  _placeholder={{ color: "gray.400" }}
                />
                <Input
                  id="state"
                  type="text"
                  placeholder="State"
                  _placeholder={{ color: "gray.400" }}
                />
              </Box>
              <Box display="flex" gap={2}>
                <Input
                  id="city"
                  type="text"
                  placeholder="City"
                  _placeholder={{ color: "gray.400" }}
                />
                <Input
                  id="zipcode"
                  type="text"
                  placeholder="Zip Code"
                  _placeholder={{ color: "gray.400" }}
                />
              </Box>
            </FormControl>
            <FormControl w="100%" display="flex" flexDirection="column" gap={2}>
              <Box display="flex" gap={2}>
                <Input
                  type="text"
                  id="cardholder"
                  placeholder="Card Holder"
                  _placeholder={{ color: "gray.400" }}
                />
                <Input
                  type="text"
                  id="cardnumber"
                  maxLength={16}
                  placeholder="Card Number"
                  _placeholder={{ color: "gray.400" }}
                  max={16}
                />
              </Box>
              <Box display="flex" gap={2}>
                <Input
                  type="text"
                  id="MM"
                  maxLength={2}
                  placeholder="MM"
                  _placeholder={{ color: "gray.400" }}
                />
                <Text display="flex" alignItems="center">
                  /
                </Text>
                <Input
                  type="text"
                  id="YY"
                  maxLength={2}
                  placeholder="YY"
                  _placeholder={{ color: "gray.400" }}
                />
                <Input
                  type="text"
                  id="CVC"
                  maxLength={3}
                  placeholder="CVC"
                  _placeholder={{ color: "gray.400" }}
                />
              </Box>
            </FormControl>
            <Button type="submit" colorScheme="green">
              Proceed
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Checkout;
