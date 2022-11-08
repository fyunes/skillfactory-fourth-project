import ItemList from "./ItemList";
import { Box, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Link } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const productsCollection = collection(db, "products");

  const getProducts = async () => {
    try {
      const productsData = await getDocs(productsCollection);
      return productsData;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProducts().then((productsData) =>
      setProducts(
        productsData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      p={2}
      alignItems="center"
      justifyContent="center"
      w="100%"
    >

      {/* Sacar este boton una vez que este la navbar  */}
      <Link to="/">
        <Button colorScheme="yellow">Home</Button>
      </Link>
      {/* --- */}

      <ItemList products={products} />
    </Box>
  );
};

export default ItemListContainer;
