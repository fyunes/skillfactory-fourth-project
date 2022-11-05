import { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, count) => {
    if (cart.some((element) => element.id === item.id)) {
      const indexProduct = cart.findIndex((element) => element.id === item.id);
      let product = cart[indexProduct];
      product = { ...product, count: +product.count + count };
      const newCart = [...cart];
      newCart.splice(indexProduct, 1, product);
      setCart(newCart);
    } else {
      let product = { ...item, count };
      setCart([...cart, product]);
    }
  };

  const updateCart = (id, newCount) => {
    if (cart.some((element) => element.id === id)) {
      const indexProduct = cart.findIndex((element) => element.id === id);
      let product = cart[indexProduct];
      product = { ...product, count: newCount };
      const newCart = [...cart];
      newCart.splice(indexProduct, 1, product);
      setCart(newCart);
    }
  };

  const removeById = (id) => {
    if (cart.some((element) => element.id === id)) {
     const newCart = cart.filter((product) => product.id !== id);
     setCart(newCart);
    }
  };

  const removeAll = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart, removeById, removeAll }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
