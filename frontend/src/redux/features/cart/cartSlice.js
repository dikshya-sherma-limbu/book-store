import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import Swal from "sweetalert2";
const initialState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        // If the item does not exist in the cart, add it with quantity 1
        state.cartItems.push({ ...action.payload, quantity: 1 });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your item has been added to cart",
          showConfirmButton: false,
          timer: 1500,
          heightAuto: false,
        });
      } else {
        // If the item exists, increment the quantity
        existingItem.quantity += 1;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item quantity has been updated",
          showConfirmButton: false,
          timer: 1500,
          heightAuto: false,
        });
      }
    },
    removeFromCart: (state, action) => {
      // Find the item in the cart that matches the payload
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      console.log("item index: " + itemIndex);

      if (itemIndex !== -1) {
        // If quantity is greater than 1, update the quantity
        if (action.payload.quantity > 1) {
          // Create a new item object with the updated quantity
          state.cartItems[itemIndex] = {
            ...state.cartItems[itemIndex], // Preserve other properties
            quantity: state.cartItems[itemIndex].quantity - 1, // Decrease the quantity
          };
        } else {
          // If quantity is 1, remove the item from the cart
          state.cartItems = state.cartItems.filter(
            (item) => item._id !== action.payload._id
          );
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

//export the actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
