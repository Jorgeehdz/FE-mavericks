import React from 'react'
import { Button, Card } from "react-bootstrap";
import ProductService from '../services/product.services';

const OrderProductCard = (props) => {

    function delayAndGo(e) {
        e.preventDefault();
        ProductService.putProduct(props.productId, props.orderData.id);

        setTimeout(() => window.location.reload(), 350);
    }
    return (
        <Card style={{
            padding: 0, marginTop: 0
        }}>
            <Card.Body style={{ textAlign: "center", flexDirection: 'row' }}>
                <Card.Text >Order {+ " " + props.orderData.id}</Card.Text>
                <Card.Text> Name: {props.orderData.order_name}</Card.Text>
                <Card.Text>Address: {props.orderData.address}</Card.Text>
                <Button onClick={(e) => delayAndGo(e)}>
                    Add product
                </Button>
            </Card.Body >
        </Card >

    );
}

export default OrderProductCard;