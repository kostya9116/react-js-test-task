import {createAction, createReducer} from "redux-action";

export const VIEW_PRODUCTS_ACTION = "VIEW_PRODUCTS_ACTION";

const initialState = {
};

const viewProductIdDataAction = createAction(VIEW_PRODUCTS_ACTION, (id) => (id));

export const actions = {
    viewProductIdData: viewProductIdDataAction
};

const productReducer =  createReducer(initialState, ({
}));

export default productReducer;
