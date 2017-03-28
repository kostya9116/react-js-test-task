import {createAction, createReducer} from "redux-action";

export const REMOVE_PRODUCTS_ACTION = "REMOVE_PRODUCTS_ACTION";

const initialState = {
};

const removeProductDataActions = createAction(REMOVE_PRODUCTS_ACTION, (id) => (id));

export const actions = {
    removeProductData: removeProductDataActions
};

const removeProductReducer =  createReducer(initialState, ({
}));

export default removeProductReducer;
