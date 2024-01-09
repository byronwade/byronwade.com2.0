'use client';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createCart, addToCart } from '../lib/shopify';

const useCartStore = create(
  devtools(
    persist(
      (set, get) => ({
        cartId: null,
        cartItems: [],
        initializeCart: async () => {
          const storedCartId = localStorage.getItem('cartId');
          if (!storedCartId) {
            const cart = await createCart();
            localStorage.setItem('cartId', cart.id);
            set({ cartId: cart.id });
          } else {
            set({ cartId: storedCartId });
          }
        },
        addToCart: async (lines) => {
          const state = get();
          if (!state.cartId) {
            await state.initializeCart();
          }
          const updatedCart = await addToCart(state.cartId, lines);
          set({ cartItems: updatedCart });
        },
        getCartId: () => {
          return get().cartId || localStorage.getItem('cartId');
        }
      }),
      {
        name: 'cart-storage'
      }
    )
  )
);

export default useCartStore;
