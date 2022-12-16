import { SET_PRODUCT, GET_PRODUCT, REMOVED_SET_PRODUCT } from '../constant/types';

let initialState = {
    products: [],
};

export const productReducer = (state = initialState, action) => {
    if (action.type === SET_PRODUCT) {
        return { ...state, products: action.payload };
    }

    return state;
}

export const SelectiveProductReducer = (state = {}, { type, payload }) => {
    if (type === GET_PRODUCT) {
        return { ...state, ...payload }
    }
    return state;
}