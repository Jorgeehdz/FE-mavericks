import React, { useState, useEffect } from "react";
import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import OrderService from "../services/order.service";
import OrderProductCard from "./OrderProductCart";
import AuthService from "../services/auth.service";

const ProductOrder = (props) => {
    const [orderContent, setOrderContent] = useState([]);

    useEffect(() => {
        OrderService.getOrderListByUserId(AuthService.getCurrentUser().id).then(
            (response) => {
                setOrderContent(response.data);

            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setOrderContent(_content);
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
                    Order List
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                {orderContent.map((order, index) => (
                    <OrderProductCard orderData={order} productId={props.productdata.id} key={index} />
                ))}
            </ModalBody>
            <ModalFooter>
                <Button onClick={props.onHide}>Close</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ProductOrder;