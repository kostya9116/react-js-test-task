import React, {Component} from "react";
import './style/storeStyle.css';
import HeaderComponent from '../HeaderComponent';
import ProductsListContainer from '../../container/ProductsListContainer';
import {Grid} from 'semantic-ui-react';

class StoreComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid className='storeContainer'>
                <HeaderComponent/>
                <div
                    className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10">
                    <ProductsListContainer/>
                </div>
            </Grid>
        );
    }
}

export default StoreComponent;
