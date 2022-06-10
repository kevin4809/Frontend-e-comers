import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';
import getConfig from '../../helpers/getConfig'

export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases: (state, action) => {
            return action.payload
        }
    }
})

export const { setPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;

export const getPurchases = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', getConfig())
        .then(res => dispatch(setPurchases(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}