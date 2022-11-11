import ItemList from "./ItemList";
import { Box } from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ItemListContainer = ({ category }) => {
  const [products, setProducts] = useState([]);
  const productsCollection = collection(db, "products");
  const categoryQuery = category
    ? query(productsCollection, where("category", "==", category))
    : undefined;

  const getProducts = useCallback(async () => {
    try {
      const productsData = await getDocs(
        categoryQuery ? categoryQuery : productsCollection
      );
      return productsData;
    } catch (err) {
      console.error(err);
    }
  }, [categoryQuery, productsCollection]);

  useEffect(() => {
    getProducts().then((productsData) => {
      setProducts(
        productsData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });

    // eslint-disable-next-line
  }, [category]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      p={2}
      alignItems="center"
      justifyContent="center"
      w="100%"
    >
      <ItemList products={products} />
    </Box>
  );
};

export default ItemListContainer;
