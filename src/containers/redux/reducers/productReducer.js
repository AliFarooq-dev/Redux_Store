import { SET_PRODUCT, GET_PRODUCT, REMOVED_SET_PRODUCT, SHOW_CATEGORIES } from '../constant/types';

let initialState = {
    products: [],
};

let initialcate = {
    categories: [],
};

export const productReducer = (state = initialState, action) => {
    if (action.type === SET_PRODUCT) {
        return { ...state, products: action.payload };
    }
    return state;
};

//In second parameter we just destructure the 'action' argument
export const SelectiveProductReducer = (state = {}, { type, payload }) => {
    if (type === GET_PRODUCT) {
        return { ...state, ...payload }
    }
    else if (type === REMOVED_SET_PRODUCT) {
        return {};
    }
    return state;
};

export const showCategories = (state = initialcate, { type, payload }) => {
    if (type === SHOW_CATEGORIES) {
        return { ...state, categories: payload };
    }
    return state;
}