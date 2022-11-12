import {
  Box,
  Input,
  Divider,
  Text,
  Button,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { db } from "../../firebase/firebase";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";

const Checkout = () => {
  const dbPurchases = collection(db, "purchases");
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const { cart, removeAll } = cartContext;
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      cart.map(async (product) => {
        await addDoc(dbPurchases, {...product });
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
      toast({
        title: `Success!`,
        description: "You have successfully purchased your products!",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
      removeAll();
      setTimeout(() => navigate("/"), 3000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box w="100%" display="flex" justifyContent="center" gap={7} p={5}>
      <Box w="25%" display="flex" flexDirection="column" gap={2} mt={5}>
        {cart.map((product) => {
          return (
            <Box p={2} display="flex" justifyContent="space-between">
              <Text>{product.title}</Text>
              <Text>x{product.count}</Text>
              <Text fontWeight="bold">
                $ {(product.count * product.price).toFixed(2)}
              </Text>
            </Box>
          );
        })}
        <Divider />
        <Box alignSelf="end" mr={3}>
          <Text fontSize="lg" fontWeight="bold" textAlign="center">
            Total
          </Text>
          <Text fontWeight="bold" fontSize="lg">
            $
            {cart
              .map((product) => product.price * product.count)
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
