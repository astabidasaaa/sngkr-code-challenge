"use client";

import React, { createContext, useState } from "react";

export type CartContextType = {
  isCartOpen: boolean;
  setCartOpen: (value: boolean) => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isCartOpen, setCartOpen] = useState<boolean>(false);

  return (
    <CartContext.Provider value={{ isCartOpen, setCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};
