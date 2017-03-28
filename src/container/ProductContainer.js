import React, { Component } from "react";
import {connect} from "react-redux";
import { actions } from "../modules/product-module";
import ProductComponent from "../components/ProductComponent";

const mapStateToProps = (state) => ({
    state: state
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
    actions: {
        viewProductId: (id) => {
            return dispatch(actions.viewProductIdData(id));
        },
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductComponent);
