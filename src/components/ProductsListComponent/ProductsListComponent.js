import React, {Component} from "react";
import {Grid, Image} from 'semantic-ui-react';
import ProductContainer from '../../container/ProductContainer';
import EditProductContainer from '../../container/EditProductContainer';
import RemoveProductContainer from '../../container/RemoveProductContainer';

class ProductsListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openEditModal: false,
            openRemoveModal: false,
            removeProductId: null,
            editModalData: {}
        };
        this.toggleEditProductModal = this.toggleEditProductModal.bind(this);
        this.toggleRemoveProductModal = this.toggleRemoveProductModal.bind(this);
    }

    componentWillMount() {
        this.props.actions.getProducts();
    }

    toggleRemoveProductModal(productId) {
        const status = !this.state.openRemoveModal;
        this.setState({
            openRemoveModal: status,
            removeProductId: productId
        });
    }

    toggleEditProductModal(productId) {
        const status = !this.state.openEditModal;
        let productData = {};
        if (productId) {
            const books = this.props.state.productsList.books;
            for (let book of books) {
                if (book.id == productId) {
                    productData.Name = book.Name;
                    productData.Author = book.Author;
                    productData.Name = book.Name;
                    productData.Price = book.Price;
                    productData.Published = book.Published;
                    productData.Description = book.Description;
                    productData.Image = book.Image;
                    productData.id = book.id;
                    break
                }
            }
        }

        this.setState({
            openEditModal: status,
            editModalData: productData
        });
    }

    render() {
        const products = this.props.state.productsList.books && this.props.state.productsList.books;
        return (
            <Grid>
                {products && products.map((product) => {
                    return (
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" key={product.id}>
                            <ProductContainer
                                id={product.id}
                                name={product.Name}
                                author={product.Author}
                                price={product.Price}
                                imageURL={product.Image}
                                toggleEditModal={this.toggleEditProductModal}
                                toggleRemoveModal={this.toggleRemoveProductModal}
                            />
                        </div>
                    )
                })
                }
                <EditProductContainer
                    open={this.state.openEditModal}
                    toggleEditModal={this.toggleEditProductModal}
                    data={this.state.editModalData}
                />
                <RemoveProductContainer
                    open={this.state.openRemoveModal}
                    toggleRemoveModal={this.toggleRemoveProductModal}
                    id={this.state.removeProductId}
                />

            </Grid>
        );
    }
}

export default ProductsListComponent;
