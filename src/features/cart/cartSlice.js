import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  //   cart: [
  //     { pizzaId: 7, name: 'Napoli', quantity: 3, unitPrice: 16, totalPrice: 48 },
  //     { pizzaId: 5, name: 'Diavola', quantity: 2, unitPrice: 16, totalPrice: 32 },
  //     { pizzaId: 3, name: 'Romana', quantity: 1, unitPrice: 15, totalPrice: 15 },
  //   ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // paylaod = newitem to add to the cart
      state.cart.push(action.payload);
    },
    // paylaod = id of the item to remove from the cart
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.pizzaId !== action.payload,
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find(
        (cartItem) => cartItem.pizzaId === action.payload,
      );
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find(
        (cartItem) => cartItem.pizzaId === action.payload,
      );
      if (item && item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    //   if you want to remove item when quantity is 0
    //   if(item.quantity === 0) {
    //     cartSlice.caseReducers.decreaseItemQuantity(state, action)
    //   }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  addItem,
  deleteItem,
} = cartSlice.actions;

export default cartSlice.reducer;

const selectCart = (store) => store.cart.cart;

// export const getCart = createSelector([selectCart], (cart) => cart);
export const getCart = (state) => state.cart.cart;


export const getTotalCartQuantity = createSelector([selectCart], (cart) =>
  cart.reduce((acc, item) => acc + item.quantity, 0),
);

export const getCurrentQuantityById = (id) => createSelector( 
  [selectCart],
    (cart) => cart.find((item) => item.pizzaId === id)?.quantity ?? 0,
);

export const getTotalCartPrice = createSelector([selectCart], (cart) =>
  cart.reduce((acc, item) => acc + item.totalPrice, 0),
);
