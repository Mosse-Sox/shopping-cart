/**
 * the benefit to creating a custom hook for this is it brings together a few other imports and simplifies things
 */

import { useContext } from "react";
import CartContext from "../context/CartProvider";
import { UseCartContextType } from "../context/CartProvider";

const useCart = (): UseCartContextType => {
  return useContext(CartContext);
};

export default useCart;
