import React from 'react'
import { Card } from "react-bootstrap";

const ProductCardOrder = ({ productData }) => {
    return (
        <Card className='card-product-order'>
            <Card.Body style={{ padding: 0, textAlign: "center", flexDirection: 'row' }} >
                <Card.Title >Product {+ " " + productData.id}</Card.Title>
                <Card.Text >
                    Name: {productData.name}
                </Card.Text>
                <Card.Text>
                    Price: {productData.price}
                </Card.Text>
            </Card.Body>
        </Card>

    );
}

export default ProductCardOrder;