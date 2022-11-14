import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import PurchaseHistory from "./pages/PurchaseHistory";

const App = () => {
  return (
    <Box
      className="App"
      maxW="100vw"
      minH="100vh"
      bg="linear-gradient(to top, #f7faff, #f7faff, #f6faff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff)"
      fontFamily={`'Lato', 'sans-serif'`}
      color="gray.900"
    >
      <Grid
        templateAreas={`
          'navbar'
          'main'
          'footer'
          `}
        gridTemplateRows={{
          base: "100px auto auto",
          md: "150px auto 150px",
        }}
        gridTemplateColumns="1fr"
      >
        <GridItem
          area={"navbar"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <NavBar />
        </GridItem>
        <GridItem
          area={"main"}
          mt={10}
          mb={10}
          display="flex"
          justifyContent="center"
        >
          <Routes>
            <Route path="/" element={<Home title="Shop" />} />
            <Route
              path="/products"
              element={<Products title="All Products" />}
            />
            <Route
              path="/category/:category"
              element={<Products title="Products" />}
            />
            <Route path="/category/:category/:id" element={<ProductDetail />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart title="Cart" />} />
            <Route path="/checkout" element={<Checkout title="Checkout" />} />
            <Route
              path="/checkout/:id/:qty"
              element={<Checkout title="Checkout" />}
            />
            <Route path="/purchase-history" element={<PurchaseHistory />} />
          </Routes>
        </GridItem>
        <GridItem
          area={"footer"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="gray.100"
        >
          <Footer />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default App;
