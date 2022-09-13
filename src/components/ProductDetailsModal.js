import React from "react";
import { Card, Button } from "react-bootstrap";
import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const ProductDetailsModal = (props) => {

    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ModalHeader>
                <ModalTitle id='contained-modal-title-vcenter'>
                    Order {props.productdata.id}
                </ModalTitle>
            </ModalHeader>
            <ModalBody >
                <Card className='card-order-details'>
                    <Card.Body style={{ padding: 0, textAlign: "center", flexDirection: 'row' }}>
                        <Card.Title>Product {+ " " + props.productdata.id}</Card.Title>
                        <Card.Text >
                            Name: {props.productdata.name}
                        </Card.Text>
                        <Card.Text>
                            Price: {props.productdata.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </ModalBody>
            <ModalFooter>
                <Button onClick={props.onHide}>Close</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ProductDetailsModal;