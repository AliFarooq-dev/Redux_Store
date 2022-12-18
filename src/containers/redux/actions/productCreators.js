import { SET_PRODUCT, GET_PRODUCT, REMOVED_SET_PRODUCT, SHOW_CATEGORIES } from '../constant/types';

export const setProduct = (products) => ({
    type: SET_PRODUCT,
    payload: products
});

export const selectiveProduct = (product) => ({
    type: GET_PRODUCT,
    payload: product
});

export const removedSelectiveProduct = () => ({
    type: REMOVED_SET_PRODUCT
});

export const showCategories = (categories) => ({
    type: SHOW_CATEGORIES,
    payload: categories
});