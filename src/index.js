import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "./styles/style.css";
import App from "./App";
import CartProvider from "./context/CartProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <CartProvider>
        <App />
      </CartProvider>
    </ChakraProvider>
  </BrowserRouter>
);
