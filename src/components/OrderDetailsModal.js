import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ProductService from '../services/product.services';
import ProductCardOrder from "./ProductCardOrder";

const OrderDetailsModal = (props) => {
    const [productContent, setProductContent] = useState([]);

    useEffect(() => {
        const usr = props.orderdata.id;
        ProductService.getProductListByOrderId(usr).then(
            (response) => {
                setProductContent(response.data)
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setProductContent(_content);
            }
        )
    }, [])

    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ModalHeader>
                <ModalTitle id='contained-modal-title-vcenter'>
                    Order {props.orderdata.id}
                </ModalTitle>
            </ModalHeader>
            <ModalBody >
                <Card className='card-order-details'>
                    <Card.Body style={{ padding: 0, textAlign: "center", flexDirection: 'row' }}>
                        <Card.Title>Order {+ " " + props.orderdata.id}</Card.Title>
                        <Card.Text >
                            Name: {props.orderdata.order_name}
                        </Card.Text>
                        <Card.Text>
                            Status: {props.orderdata.status}
                        </Card.Text>
                        <Card.Text>
                            Address: {props.orderdata.address}
                        </Card.Text>
                        <Card.Text>
                            Products:
                        </Card.Text>
                        {productContent.map((product, index) => (
                            <ProductCardOrder productData={product} key={index} />
                        ))}
                    </Card.Body>
                </Card>
            </ModalBody>
            <ModalFooter>
                <Button onClick={props.onHide}>Close</Button>
            </ModalFooter>
        </Modal>
    );
}

export default OrderDetailsModal;