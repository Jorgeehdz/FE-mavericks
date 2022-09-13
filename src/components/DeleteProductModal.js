import React from 'react';
import { Button } from "react-bootstrap";
import ProductService from '../services/product.services';
import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const DeleteProductModal = (props) => {

    function delayAndGo(e) {
        e.preventDefault();
        ProductService.deleteProduct(props.productdata);

        setTimeout(() => window.location.reload(), 350);
    }
    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ModalHeader>
                <ModalTitle id='contained-modal-title-vcenter'>
                    Delete Product
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <h2>Are you sure that you want to delete this product?</h2>
            </ModalBody>
            <ModalFooter>
                <Button variant="danger" onClick={(e) => delayAndGo(e)}>
                    Delete
                </Button>
                <Button onClick={props.onHide}>Close</Button>
            </ModalFooter>
        </Modal>
    );
}

export default DeleteProductModal;