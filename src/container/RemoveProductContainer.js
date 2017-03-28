import React, { Component } from "react";
import {connect} from "react-redux";
import { actions } from "../modules/remove-product-module";
import RemoveProductComponent from "../components/RemoveProductComponent";

const mapStateToProps = (state) => ({
    state: state
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
    actions: {
        removeProduct: (id) => {
            dispatch(actions.removeProductData(id));
        },
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RemoveProductComponent);
