"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { CiShoppingCart } from "react-icons/ci";
import { addItem, resetCart } from "@/store/cartSlice";
import { Button } from "@/components/ui/button";
import { useCartContext } from "@/utils/useCartContext";

const AddToCart = ({
  product: { id, name, price },
}: {
  product: {
    id: string;
    name: string;
    price: number;
  };
}) => {
  const { setCartOpen } = useCartContext();
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newItem = {
      id: id,
      name: name,
      price: price,
      quantity: 1,
    };
    dispatch(addItem(newItem));
    setCartOpen(true);
  };

  return (
    <Button
      onClick={handleAddItem}
      variant="secondary"
      size="lg"
      className="mb-8 text-base font-lato font-regular"
    >
      <CiShoppingCart className="mr-4 size-6" /> Add to cart
    </Button>
  );
};

export default AddToCart;
