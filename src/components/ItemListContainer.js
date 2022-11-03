import ItemList from "./ItemList";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

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
      <h1>ITEM LIST CONTAINER</h1>
      <ItemList products={products} />
    </Box>
  );
};

export default ItemListContainer;
