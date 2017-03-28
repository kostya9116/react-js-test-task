import React, {Component} from "react";
import productPageStyle from './style/productPageStyle.css';
import HeaderComponent from '../HeaderComponent';
import {Grid, Item, List} from 'semantic-ui-react';

class ProductPageComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.actions.getViewProduct();
    }

    render() {
        const productData = this.props.state.productPage.viewProduct && this.props.state.productPage.viewProduct;
        return (
            <Grid className="productPageContainer">
                <HeaderComponent/>
                { productData &&
                <Item.Group className="contentContainer">
                    <Item>
                        <Item.Image className='productImage' src={productData.Image}/>

                        <Item.Content>
                            <Item.Header className="productHeader">{productData.Name}</Item.Header>
                            <Item.Description>
                                <List>
                                    <List.Item>
                                        <p className="labelStyle">Author:</p>
                                        <List.Content className="infoStyle">
                                            <List.Description>{productData.Author}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <p className="labelStyle">Price:</p>
                                        <List.Content className="infoStyle">
                                            <List.Description>{productData.Price}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <p className="labelStyle">Published Year:</p>
                                        <List.Content className="infoStyle">
                                            <List.Description>{productData.Published}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <p className="labelStyle">Description:</p>
                                        <List.Content className="descriptionStyle">
                                            <List.Description>{productData.Description}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>

                }
                {!productData &&
                <div><h1>There is no product to show</h1></div>
                }
            </Grid>
        );
    }
}

export default ProductPageComponent;
