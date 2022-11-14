import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const cartFromStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const purchasesFromStorage = JSON.parse(
    localStorage.getItem("purchases") || "[]"
  );
  const [cart, setCart] = useState(cartFromStorage);
  const [purchases, setPurchases] = useState(purchasesFromStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("purchases", JSON.stringify(purchases));
  }, [purchases]);

  const clearHistory = () => {
    setPurchases([]);
  };

  const addToCart = (item, count) => {
    if (cart.some((element) => element.id === item.id)) {
      const indexProduct = cart.findIndex((element) => element.id === item.id);
      let product = cart[indexProduct];
      product = { ...product, count: parseInt(product.count + count) };
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
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateCart,
        removeById,
        removeAll,
        purchases,
        setPurchases,
        clearHistory,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
