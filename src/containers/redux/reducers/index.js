import { combineReducers } from "redux"
import { productReducer, SelectiveProductReducer, showCategories } from './productReducer';

export const reducers = combineReducers({
    allProducts: productReducer,
    product: SelectiveProductReducer,
    categories: showCategories
});