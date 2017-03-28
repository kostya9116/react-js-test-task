import React, { Component } from "react";
import {connect} from "react-redux";
import { actions } from "../modules/product-page-module";
import ProductPageComponent from "../components/ProductPageComponent";

const mapStateToProps = (state) => ({
    state: state
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
    actions: {
        getViewProduct: () => {
            dispatch(actions.getViewProductData());
        },
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductPageComponent);
