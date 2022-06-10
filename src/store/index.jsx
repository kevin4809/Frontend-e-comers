import { configureStore } from '@reduxjs/toolkit'
import isLoading from './slices/isLoading.slice'
import produtcs from './slices/products.slice'
import phurchases from './slices/purchases.slice'
import car from './slices/car.slice'
export default configureStore({
    reducer: {
        isLoading,
        produtcs,
        phurchases,
        car
    }
})