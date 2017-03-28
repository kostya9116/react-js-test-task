import React from "react";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute} from "react-router";
import store, {history} from "./store";

import App from "./components/App/App";
import * as Pages from "./pages";
const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
            <IndexRoute component={Pages.HomePage}/>
                <Route path="product_page" component={Pages.ProductPage}/>
        </Route>
    </Router>
</Provider>
)
;

export default routes;
