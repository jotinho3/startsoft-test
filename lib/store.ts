// store/index.ts

import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

// Exportar o tipo RootState
export type RootState = ReturnType<typeof store.getState>;

export default store
