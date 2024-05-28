import { createSlice } from "@reduxjs/toolkit";

const getInitialCartState = () => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};

const initialState = {
  cartItems: getInitialCartState(),
  totalQuantity: 0,
  totalPrice: 0,
};

const calculateTotals = (cartItems) => {
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  return { totalQuantity, totalPrice };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    ...initialState,
    ...calculateTotals(initialState.cartItems),
  },
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
      const totals = calculateTotals(state.cartItems);
      state.totalQuantity = totals.totalQuantity;
      state.totalPrice = totals.totalPrice;
    },
    addItem: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      const totals = calculateTotals(state.cartItems);
      state.totalQuantity = totals.totalQuantity;
      state.totalPrice = totals.totalPrice;
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (i) => i.id !== action.payload.id
      );
      const totals = calculateTotals(state.cartItems);
      state.totalQuantity = totals.totalQuantity;
      state.totalPrice = totals.totalPrice;
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
      const totals = calculateTotals(state.cartItems);
      state.totalQuantity = totals.totalQuantity;
      state.totalPrice = totals.totalPrice;
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      const totals = calculateTotals(state.cartItems);
      state.totalQuantity = totals.totalQuantity;
      state.totalPrice = totals.totalPrice;
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      if (typeof window !== "undefined") {
        localStorage.removeItem("cartItems");
      }
    },
  },
});

export const {
  setCartItems,
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
