import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        alert("The item was added to your shopping cart.");
        return {
          cart: updatedCart,
        };
      } else {
        const updatedCart = [...state.cart, { ...product, quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        alert("The item was added to your shopping cart.");
        return {
          cart: updatedCart,
        };
      }
    }),

  removeFromCart: (productId) =>
    set((state) => {
      if (window.confirm("Do you want to remove this item from the cart?")) {
        const updatedCart = state.cart.filter((item) => item.id !== productId);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return {
          cart: updatedCart,
        };
      } else {
        return {};
      }
    }),

  addQuantity: (productId) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        cart: updatedCart,
      };
    }),

  subtractQuantity: (productId) =>
    set((state) => {
      const itemToUpdate = state.cart.find((item) => item.id === productId);

      if (itemToUpdate && itemToUpdate.quantity === 1) {
        if (window.confirm("Do you want to remove this item from the cart?")) {
          const updatedCart = state.cart.filter(
            (item) => item.id !== productId
          );
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          return {
            cart: updatedCart,
          };
        } else {
          return {};
        }
      } else {
        const updatedCart = state.cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return {
          cart: updatedCart,
        };
      }
    }),
}));
