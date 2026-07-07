import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    countItems: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingEle = state.cartItems.find(
        (item) => item.id === newItem.id,
      );
      if (existingEle) {
        existingEle.quantity = (existingEle.quantity || 1) + 1;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
      state.countItems++;
    },
    handleIncre: (state, action) => {
      let minOrderQuan = action.payload;
      if (state.countItems < minOrderQuan) {
        state.countItems++;
      }
    },
    handleDecre: (state) => {
      if (state.countItems <= 1) {
        return;
      }
      state.countItems--;
    },
    QuantInc: (state, action) => {
      const cartObj = action.payload;
      const cartItemIndx = state.cartItems.findIndex(
        (item) => item.id === cartObj.id,
      );
      let minQun = cartObj.minimumOrderQuantity;
      if (cartObj.quantity < minQun) {
        state.cartItems[cartItemIndx].quantity++;
      }
    },

    QuantDec: (state, action) => {
      const cartObj = action.payload;
      const cartItemIndx = state.cartItems.findIndex(
        (item) => item.id === cartObj.id,
      );
      let minQun = cartObj.minimumOrderQuantity;
      if (cartObj.quantity <= 1) {
        return;
      }
      state.cartItems[cartItemIndx].quantity--;
    },
    deleteCartItem: (state, action) => {
      const cartItem = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== cartItem.id,
      );
      state.countItems--;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  handleIncre,
  handleDecre,
  QuantInc,
  QuantDec,
  deleteCartItem,
} = cartSlice.actions;
