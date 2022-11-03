import { SET_PRODUCT, GET_PRODUCT, REMOVED_SET_PRODUCT } from '../constant/types';

let initialState = [
    {
        id: 1,
        name: 'Ali Farooq',
        category: 'programmer'
    }
];

export const productReducer = (state = initialState, action)=>{
    if(action.type === SET_PRODUCT){
        return state;
    }
    return state;
}