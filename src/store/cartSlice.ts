import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.total += action.payload.price * action.payload.quantity;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        state.total -= item.price * item.quantity;

        const newItems = state.items.filter(
          (item) => item.id !== action.payload
        );
        state.items = newItems;
        localStorage.setItem("cart", JSON.stringify(state));

        return state;
      }
    },
    increaseItem: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
        state.total += item.price;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    decreaseItem: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.total -= item.price;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    loadCart: (state) => {
      const cart = localStorage.getItem("cart");

      if (cart) {
        return JSON.parse(cart);
      }
    },
    resetCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(initialState));
      return initialState;
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItem,
  decreaseItem,
  loadCart,
  resetCart,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
