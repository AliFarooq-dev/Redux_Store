import {combineReducers} from "redux"
import { productReducer, SelectiveProductReducer } from './productReducer';

export const reducers = combineReducers({
    allProducts: productReducer,
    product: SelectiveProductReducer
});