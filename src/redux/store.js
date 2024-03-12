import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice';
import couponSlice from './couponSlice';
import orderSlice from './orderSlice';
import productSlice from './productSlice';
import reviewSlice from './reviewSlice';
import userSlice from './userSlice';
import sellerSlice from './sellerSlice';

export const store = configureStore({
    reducer: {
        categoryReducer: categorySlice,
        couponReducer: couponSlice,
        orderReducer: orderSlice,
        productReducer: productSlice,
        reviewReducer: reviewSlice,
        userReducer: userSlice,
        sellerReducer: sellerSlice
    }
});