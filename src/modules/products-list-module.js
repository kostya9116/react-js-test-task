import {createAction, createReducer} from "redux-action";
import GetDataService from "../services/GetDataService";
import store from 'store';

export const GET_PRODUCTS_ACTION = "GET_PRODUCTS_ACTION";
export const EDIT_PRODUCTS_ACTION = "EDIT_PRODUCTS_ACTION";
export const REMOVE_PRODUCTS_ACTION = "REMOVE_PRODUCTS_ACTION";
export const VIEW_PRODUCTS_ACTION = "VIEW_PRODUCTS_ACTION";

const initialState = {};

const getProductsActions = createAction(GET_PRODUCTS_ACTION, () => {
    let books = store.get('books');
    if (books) {
        return {data: books, localhostData: true};
    }
    else {
        const service = new GetDataService();
        return service.getData('books.json').catch((err) => {
            console.log(err)
        })
    }

});


export const actions = {
    getProductsData: getProductsActions
};

const productsListReducer = createReducer(initialState, ({
    [GET_PRODUCTS_ACTION]: (actionPayload, state) => {
        const books = actionPayload.data;
        if (!actionPayload.localhostData) {
            store.set('books', books);
        }
        return {...state, books: books};
    },
    [EDIT_PRODUCTS_ACTION]: (actionPayload, state) => {
        let books = store.get('books');
        for (let [key, value] of books.entries()) {
            if (value.id == actionPayload.id) {
                books[key] = actionPayload;
                break;
            }
        }
        store.set('books', books);
        return {...state, books: books};
    },
    [REMOVE_PRODUCTS_ACTION]: (actionPayload, state) => {
        let books = store.get('books');
        for (let [key, value] of books.entries()) {
            if (value.id == actionPayload) {
                books.splice(key, 1);
                break;
            }
        }
        store.set('books', books);
        return {...state, books: books};
    },
    [VIEW_PRODUCTS_ACTION]: (actionPayload, state) => {
        const viewProductId = actionPayload;
        const books = state.books;
        let viewProduct;
        for (let [key, value] of books.entries()) {
            if (value.id == viewProductId) {
                viewProduct = books[key];
                break;
            }
        }
        store.set('viewProduct', viewProduct);
        return {...state};
    },
}));

export default productsListReducer;
