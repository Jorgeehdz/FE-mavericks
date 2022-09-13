import React, { useState } from 'react';
import { Card, Button, ButtonToolbar } from "react-bootstrap";
import OrderService from '../services/order.service';
import DeleteOrderModal from './DeleteOrderModal';
import OrderDetailsModal from './OrderDetailsModal';

const OrderCard = ({ orderData }) => {
    const [detailsModal, setDetailsModal] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    function delayAndGo(e) {
        e.preventDefault();
        OrderService.putOrderStatus(orderData.id);

        setTimeout(() => window.location.reload(), 300);
    }

    return (
        <Card className='card-order' >
            <Card.Body style={{ padding: 0, textAlign: "center", flexDirection: 'row' }}>
                <Card.Title>Order {+ " " + orderData.id}</Card.Title>
                <Card.Text >
                    Name: {orderData.order_name}
                </Card.Text>
                <Card.Text>
                    Status: {orderData.status}
                </Card.Text>
                <Card.Text>
                    Address: {orderData.address}
                </Card.Text>
                <ButtonToolbar>
                    <Button variant="primary" className="btn-order-details" onClick={() => setDetailsModal(true)}>
                        Details
                    </Button>
                    <Button variant="primary" className="btn-order" onClick={(e) => delayAndGo(e)}>
                        Change Status
                    </Button>
                    <Button variant="danger" className="btn-modal-order" onClick={() => setModalShow(true)}>Delete</Button>
                    <DeleteOrderModal
                        show={modalShow}
                        orderdata={orderData.id}
                        onHide={() => setModalShow(false)}
                    />
                    <OrderDetailsModal
                        show={detailsModal}
                        orderdata={orderData}
                        onHide={() => setDetailsModal(false)}
                    />
                </ButtonToolbar>
            </Card.Body>
        </Card>

    );
}

export default OrderCard;