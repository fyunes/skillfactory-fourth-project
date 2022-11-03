import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <Box
      className="App"
      minH="100vh"
      bg="linear-gradient(to top, #f7faff, #f7faff, #f6faff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff)"
      maxW="100vw"
      fontFamily={`'Roboto', 'sans-serif'`}
      color='gray.900'
    >
      <Grid
        templateAreas={`'navbar'
                        'main'
                        'footer'`}
        gridTemplateRows={{
          base: "100px auto 100px",
          sm: "150px auto 150px",
        }}
        gridTemplateColumns={"1fr"}
      >
        <GridItem area={"navbar"}>
          <NavBar />
        </GridItem>
        <GridItem area={"main"}>
          <Routes>
            <Route path="/" element={<Home title="Shop" />} />
            <Route path="/products" element={<Products title="Products" />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/" element={<Home title="Shop" />} />
          </Routes>
        </GridItem>
        <GridItem bg="red.100" area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default App;
