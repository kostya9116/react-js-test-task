import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import storeReduce from "./modules/store-module";
import productsListReducer from "./modules/products-list-module";
import removeProductReducer from "./modules/remove-product-module";
import editProductReducer from "./modules/edit-product-module";
import productPageReducer from "./modules/product-page-module";
import productReducer from "./modules/product-module";

const rootReducer = combineReducers({
    // BOT: Reducer list here
    store: storeReduce,
    productsList: productsListReducer,
    editProduct: editProductReducer,
    removeProduct: removeProductReducer,
    productPage: productPageReducer,
    product: productReducer,
    routing: routerReducer
});

export default rootReducer;
