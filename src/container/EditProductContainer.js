import React, { Component } from "react";
import {connect} from "react-redux";
import { actions } from "../modules/edit-product-module";
import EditProductComponent from "../components/EditProductComponent";

const mapStateToProps = (state) => ({
    state: state
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
    actions: {
        editProduct: (data) => {
            dispatch(actions.editProductData(data));
        },
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProductComponent);
