import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../helpers/getConfig';
import { setIsLoading } from './isLoading.slice';
import { getPurchases } from './purchases.slice'
export const carSlice = createSlice({
    name: 'car',
    initialState: {},
    reducers: {
        setCart: (state, action) => {
            return action.payload
        }
    }
})

export const { setCart } = carSlice.actions;

export default carSlice.reducer;

export const getCart = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConfig())
        .then(res => dispatch(setCart(res.data.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addToCart = (product) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/cart", product, getConfig())
        .then(() => dispatch(getCart))
        .finally(() => dispatch(setIsLoading(false)));
}

export const buy = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', {}, getConfig())
        .then(() => {
            dispatch(getPurchases())
            dispatch(setCart([]))
        })
        .finally(() => dispatch(setIsLoading(false)));
}