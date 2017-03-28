import React, { Component } from "react";
import {connect} from "react-redux";
import { actions } from "../modules/store-module";
import StoreComponent from "../components/StoreComponent";

const mapStateToProps = (state) => ({
    state: state
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
    actions: {
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoreComponent);
