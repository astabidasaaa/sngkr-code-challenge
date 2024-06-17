import { CartContext } from "@/components/providers/cartProvider";
import { useContext } from "react";

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
};
