import { createReducer } from "@reduxjs/toolkit";

// const loasState = () => {
//   const saveProductData = localStorage.getItem("cartState");
//   return saveProductData ? JSON.parse(saveProductData) : [];
// };

// const saveState = (state) => {
//   try {
//     const setProductData = JSON.stringify(state);
//     localStorage.setItem("cartState", setProductData);
//   } catch (error) {
//     console.log("Error loading state from local Storage", error);
//   }
// };

export const cartReducer = createReducer(
  // loasState() || {
    {
    cartItems: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },

  {
    addToCart: (state, action) => {
      const item = action.payload;
      const isitemExist = state.cartItems.find((i) => i.id === item.id);
      if (isitemExist) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity += 1;
        });
      } else {
        state.cartItems.push(item);
      }
      // saveState(state);
    },

    decrement: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item.quantity > 1) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity -= 1;
        });
        // saveState(state);
      }
    },
    deleteFromcart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
      // saveState(state);
    },

    calculatePrice: (state) => {
      let sum = 0;
      state.cartItems.forEach((i) => (sum += i.price * i.quantity));
      state.subTotal = sum;
      state.shipping = state.subTotal > 1000 ? 0 : 200;
      state.tax = +(state.subTotal * 0.18).toFixed();
      state.total = state.subTotal + state.tax + state.shipping;
      // saveState(state);
    },
  }
);
