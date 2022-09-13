import React, { useState } from 'react'
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ProductOrder from './ProductOrder';
import DeleteProductModal from './DeleteProductModal';
import ProductDetailsModal from './ProductDetailsModal';

const ProductCard = ({ productData }) => {
    const [modalShow, setModalShow] = useState(false);
    const [modalShow1, setModalShow1] = useState(false);
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
                <Button className="btn-product-details" onClick={() => setDetailsShow(true)}>
                    Details
                </Button>
                <Button className="btn-product" onClick={() => setModalShow(true)}>
                    Set in Order
                </Button>
                <Button variant="danger" className="btn-modal-set-order" onClick={() => setModalShow1(true)}>Delete</Button>
                <ProductOrder
                    show={modalShow}
                    productdata={productData}
                    onHide={() => setModalShow(false)}
                />
                <DeleteProductModal
                    show={modalShow1}
                    productdata={productData.id}
                    onHide={() => setModalShow1(false)}
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

export default ProductCard;