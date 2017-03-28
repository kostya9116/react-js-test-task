import {createAction, createReducer} from "redux-action";
import store from 'store';

export const GET_VIEW_PRODUCTS_ACTION = "GET_VIEW_PRODUCTS_ACTION";

const initialState = {};

const getViewProductDataAction = createAction(GET_VIEW_PRODUCTS_ACTION);

export const actions = {
    getViewProductData: getViewProductDataAction
};

const productPageReducer = createReducer(initialState, ({
    [GET_VIEW_PRODUCTS_ACTION]: (actionPayload, state) => {
        const viewProduct = store.get('viewProduct');
        return {...state, viewProduct: viewProduct};
    },
}));

export default productPageReducer;
