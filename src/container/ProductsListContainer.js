import React, { Component } from "react";
import {connect} from "react-redux";
import { actions } from "../modules/products-list-module";
import ProductsListComponent from "../components/ProductsListComponent";

const mapStateToProps = (state) => ({
    state: state
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
    actions: {
        getProducts: () => {
            dispatch(actions.getProductsData());
        },
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsListComponent);
