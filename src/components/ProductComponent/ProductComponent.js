import React, {Component} from "react";
import productStyle from './style/productStyle.css';
import {Image, Button, Popup} from 'semantic-ui-react';
import {browserHistory} from "react-router";

class ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.toggleEditModal = this.toggleEditModal.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.viewProduct = this.viewProduct.bind(this);
    }

    toggleEditModal(e) {
        const productId = e.target.parentElement.id ? e.target.parentElement.id : e.target.parentElement.parentElement.id;
        this.props.toggleEditModal(productId);
    }

    removeProduct(e) {
        const productId = e.target.parentElement.id ? e.target.parentElement.id : e.target.parentElement.parentElement.id;
        this.props.toggleRemoveModal(productId);
    }

    viewProduct(e) {
        const productId = e.target.parentElement.id ? e.target.parentElement.id : e.target.parentElement.parentElement.id;
        const createViewProduct = this.props.actions.viewProductId(productId);
        createViewProduct.then((response) => {
            browserHistory.push("/product_page");
        })
    }

    render() {
        const imageURL = this.props.imageURL && this.props.imageURL;
        const name = this.props.name;
        const author = this.props.author;
        const price = this.props.price;
        const id = this.props.id;
        return (
            <div className="component bookContainer">
                <div className="align">
                    <div>
                        <figure className='book'>
                            <ul className='hardcover_front'>
                                {{imageURL} && <Image src={imageURL} className="bookThumbnail"/>}
                            </ul>
                            <ul className='page'>
                                <li/>
                                <li className="pageWithContent">
                                    <p>{name}</p>
                                    <p>Author: {author}</p>
                                    <p>Price: {price}</p>
                                    <Button.Group id={id} basic>
                                        <Popup
                                            trigger={ <Button icon='edit' onClick={this.toggleEditModal}/>}
                                            content='Edit'
                                        />
                                        <Popup
                                            trigger={ <Button icon='unhide' onClick={this.viewProduct}/>}
                                            content='View'
                                        />
                                        <Popup
                                            trigger={ <Button icon='remove circle' onClick={this.removeProduct}/>}
                                            content='Remove'
                                        />
                                    </Button.Group>
                                </li>
                                <li/>
                                <li/>
                            </ul>
                            <ul className='hardcover_back'>
                                <li/>
                                <li/>
                            </ul>
                            <ul className='book_spine'>
                                <li/>
                                <li/>
                            </ul>
                        </figure>
                    </div>

                </div>
            </div>
        );
    }
}

export default ProductComponent;
