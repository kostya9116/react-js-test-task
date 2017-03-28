import React, {Component} from "react";
import {Button, Icon} from 'semantic-ui-react';
import {Modal} from 'react-bootstrap';

class RemoveProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.removeProduct = this.removeProduct.bind(this);
    }

    removeProduct() {
        this.props.actions.removeProduct(this.props.id);
        this.props.toggleRemoveModal();
    }

    render() {
        const openStatus = this.props.open;
        const toggleModal = this.props.toggleRemoveModal;

        return (
            <Modal
                show={openStatus}
                onHide={toggleModal}
                container={this}
                animation={false}
                aria-labelledby="contained-modal-title"
            >
                <Modal.Header>
                    <Modal.Title>Remove Product</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Are you sure you want to delete this product?
                </Modal.Body>

                <Modal.Footer>
                    <Button basic color='green' onClick={toggleModal}>
                        <Icon name='checkmark'/> Cancel
                    </Button>
                    <Button color='red' inverted onClick={this.removeProduct}>
                        <Icon name='remove'/> Delete
                    </Button>
                </Modal.Footer>
            </Modal>

        );
    }
}


export default RemoveProductComponent;
