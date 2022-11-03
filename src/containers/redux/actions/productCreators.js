import { SET_PRODUCT, GET_PRODUCT, REMOVED_SET_PRODUCT } from '../constant/types';

export const setProduct = (products) => ({
    type: SET_PRODUCT,
    payload: products
});

export const selectiveProduct = (product) => ({
    type: GET_PRODUCT,
    payload: product
});