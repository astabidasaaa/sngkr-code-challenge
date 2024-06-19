"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CiShoppingCart } from "react-icons/ci";
import {
  decreaseItem,
  increaseItem,
  loadCart,
  removeItem,
  resetCart,
  selectCart,
} from "@/store/cartSlice";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { useCartContext } from "@/utils/useCartContext";
import { Minus, Plus } from "lucide-react";
import { PiTrash } from "react-icons/pi";

const Cart = () => {
  const { isCartOpen, setCartOpen } = useCartContext();
  const [loading, setLoading] = useState(true);

  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCart());
    setLoading(false);
  }, [dispatch]);

  const handleIncrease = (id: string) => {
    dispatch(increaseItem(id));
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseItem(id));
  };

  const handleDelete = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleReset = () => {
    setCartOpen(false);
    dispatch(resetCart());
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="link"
          className="outline-none focus:outline-none focus-visible:bg-accent/10"
        >
          <CiShoppingCart className="size-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col justify-between items-start w-full sm:max-w-lg overflow-auto"
        aria-describedby="Shopping cart"
      >
        <div className="flex flex-col gap-10 w-full text-lg">
          <SheetTitle>
            <span className="!font-light text-3xl md:text-4xl font-prata">
              Cart
            </span>
          </SheetTitle>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul className="font-lato flex flex-col gap-12 w-full">
              {cart.items.length > 0 &&
                cart.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full"
                  >
                    <div className="flex flex-col text-base md:text-lg">
                      <span className="font-bold">{item.name}</span>
                      <span>IDR {item.price}</span>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-2 w-full md:w-max">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(item.id)}
                      >
                        <PiTrash className="size-5" />
                      </Button>
                      <div className="flex flex-row justify-center items-center border rounded-lg">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDecrease(item.id)}
                        >
                          <Minus className="size-4" />
                        </Button>
                        <div className="flex justify-center items-center min-w-10">
                          {item.quantity}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleIncrease(item.id)}
                        >
                          <Plus className="size-4" />
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          )}
          <div className="flex flex-row justify-between items-start w-full">
            <span className="font-lato font-bold">Total</span>
            <span className="font-lato font-bold">IDR {cart.total}</span>
          </div>
        </div>
        <SheetFooter className="w-full">
          <Button onClick={handleReset}>Checkout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
