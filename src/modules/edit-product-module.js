import {createAction, createReducer} from "redux-action";
import store from 'store';

export const EDIT_PRODUCTS_ACTION = "EDIT_PRODUCTS_ACTION";

const initialState = {};

const editProductDataActions = createAction(EDIT_PRODUCTS_ACTION, (data) => (data));

export const actions = {
    editProductData: editProductDataActions
};

const editProductReducer = createReducer(initialState, ({

}));

export default editProductReducer;
