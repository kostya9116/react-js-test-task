import {createStore, applyMiddleware} from "redux";
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import logger from "redux-logger";

const initialState = {};

const createStoreWithMiddleware = applyMiddleware(
	logger,
	thunkMiddleware,
)(createStore);

const store = createStoreWithMiddleware(rootReducer, initialState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;

