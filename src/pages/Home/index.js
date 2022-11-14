import { Link } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";
import HomeCarousel from "../../components/HomeCarousel";
import Slidedata from "../../components/Slidedata";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import Item from "../../components/Item";
import { CircularProgress } from "@chakra-ui/react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const productsCollection = collection(db, "products");

  const getFeaturedProducts = async () => {
    try {
      const productsData = await getDocs(productsCollection);
      let productsList = productsData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      let indexList = [];
      while (indexList.length < 8) {
        let randomIndex = Math.floor(Math.random() * productsList.length);
        if (!indexList.includes(randomIndex)) indexList.push(randomIndex);
      }
      let featured = [];
      indexList.forEach((i) => featured.push(productsList[i]));
      return featured;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFeaturedProducts().then((data) => setProducts(data));
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      w="100%"
      maxW="1200px"
      alignItems="center"
      gap={2}
    >
      <Box mb={5} px={{ base: 1, md: 100 }}>
        <HomeCarousel slides={Slidedata} />
      </Box>
      <Heading fontWeight="400" size="lg" as="h2">
        Featured Products
      </Heading>
      <Box
        display="flex"
        justifyContent="center"
        w="80%"
        flexWrap="wrap"
        gap={5}
        my={5}
      >
        {products ? (
          products.map((product) => {
            return (
              <Link key={product.id} to={`/products/${product.id}`}>
                <Item product={product} />
              </Link>
            );
          })
        ) : (
          <CircularProgress isIndeterminate color='green.300'/>
        )}
      </Box>
    </Box>
  );
};

export default Home;
