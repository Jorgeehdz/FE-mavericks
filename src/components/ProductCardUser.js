import React, { useState } from 'react'
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ProductDetailsModal from './ProductDetailsModal';
import ProductOrder from './ProductOrder';

const ProductCardUser = ({ productData }) => {
    const [modalShow, setModalShow] = useState(false);
    const [detailsShow, setDetailsShow] = useState(false);

    return (
        <Card className='card-product'>
            <Card.Body style={{ padding: 0, textAlign: "center", flexDirection: 'row' }} >
                <Card.Title >Product {+ " " + productData.id}</Card.Title>
                <Card.Text >
                    Name: {productData.name}
                </Card.Text>
                <Card.Text>
                    Price: {productData.price}
                </Card.Text>
                <Button className="btn-product" onClick={() => setDetailsShow(true)}>
                    Details
                </Button>
                <Button className="btn-product" onClick={() => setModalShow(true)}>
                    Set in Order
                </Button>

                <ProductOrder
                    show={modalShow}
                    productdata={productData}
                    onHide={() => setModalShow(false)}
                />
                <ProductDetailsModal
                    show={detailsShow}
                    productdata={productData}
                    onHide={() => setDetailsShow(false)}
                />
            </Card.Body>
        </Card>

    );
}

export default ProductCardUser;