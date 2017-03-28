import React, {Component} from "react";
import editProductFormStyle from './style/editProductFormStyle.css';
import {Button, Input, Form, TextArea, Icon, Header} from 'semantic-ui-react';
import {Modal} from 'react-bootstrap';

class AddNewProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            originData: {}
        };
        this.validation = this.validation.bind(this);
        this.updateInputFieldValue = this.updateInputFieldValue.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const data = {};
        const originData = {};
        const props = nextProps.data;
        for (const key in props) {
            data[key] = props[key];
            originData[key] = props[key];
        }
        this.setState({
            data: data,
            originData: originData,
            errorMessage: false
        });
    }

    validation() {
        let isValid = true;
        let isSame = true;
        let data = this.state.data;
        let originData = this.state.originData;
        for (const key in data) {
            if (!data[key]) {
                isValid = false;
                isSame = false;
            } else if (data[key] !== originData[key]) {
                isSame = false
            }
        }
        if (isValid && !isSame) {
            this.props.actions.editProduct(data);
            this.props.toggleEditModal();
        } else if (!isValid) {
            this.setState({errorMessage: true})
        }
    }

    updateInputFieldValue(fieldValue, fieldName) {
        let data = this.state.data;
        data[fieldName] = fieldValue;
        this.setState({
            data: data
        })
    }

    render() {
        const openStatus = this.props.open;
        const toggleModal = this.props.toggleEditModal;
        const name = this.state.data.Name;
        const author = this.state.data.Author;
        const price = this.state.data.Price;
        const published = this.state.data.Published;
        const description = this.state.data.Description;
        const errorMessage = this.state.errorMessage;
        return (
            <Modal
                show={openStatus}
                onHide={toggleModal}
                container={this}
                animation={false}
                aria-labelledby="contained-modal-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">Edit Product Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {errorMessage && <Header className="errorMessage">The field can not be empty</Header> }
                    <Input
                        className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12"
                        label='Name'
                        labelPosition='left'
                        size='large'
                        defaultValue={name}
                        onChange={e => this.updateInputFieldValue(e.target.value, 'Name')}
                    />
                    <Input
                        className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12"
                        label='Author'
                        labelPosition='left'
                        size='large'
                        defaultValue={author}
                        onChange={e => this.updateInputFieldValue(e.target.value, 'Author')}
                    />
                    <Input
                        className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12"
                        label="Published Date"
                        labelPosition='left'
                        size='large'
                        defaultValue={published}
                        onChange={e => this.updateInputFieldValue(e.target.value, 'Published')}
                    />
                    <Input
                        className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12"
                        label="Price"
                        labelPosition='left'
                        size='large'
                        defaultValue={price}
                        onChange={e => this.updateInputFieldValue(e.target.value, 'Price')}
                    />

                    <TextArea
                        className="descriptionTextArea col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12"
                        defaultValue={description}
                        onChange={e => this.updateInputFieldValue(e.target.value, 'Description')}
                        autoHeight
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button basic color='red' onClick={toggleModal}>
                        <Icon name='remove'/> Cancel
                    </Button>
                    <Button color='green' inverted onClick={this.validation}>
                        <Icon name='checkmark'/> Edit
                    </Button>
                </Modal.Footer>
            </Modal>

        );
    }
}


export default AddNewProductComponent;
