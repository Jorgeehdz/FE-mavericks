import React, { useState } from "react";
import Form from "react-validation/build/form";
import { Card, Button } from "react-bootstrap";
import Input from "react-validation/build/input";
import { useNavigate } from "react-router-dom";
import ProductService from "../services/product.services";

const RegistProduct = () => {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [message, setMessage] = useState("");
    const history = useNavigate();

    const onChangeName = (e) => {
        const name = e.target.value;
        setProductName(name);
    };

    const onChangePrice = (e) => {
        const price = e.target.value;
        setPrice(price);

    };


    function delayAndGo(e, path) {
        e.preventDefault();
        setMessage("");
        if (productName && price) {
            ProductService.postProduct(productName, price);
            setTimeout(() => history(path), 300);
        } else {
            setMessage("Name and Price must not be empty.")
        }

    }

    return (
        <Card className="card-product" style={{ textAlign: "center", flexDirection: 'row' }}>
            <Card.Body  >
                <Form onSubmit={delayAndGo}>
                    <div className="form-group">
                        <h2>Create Product</h2>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="productName"
                            value={productName}
                            onChange={onChangeName}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Price">Price</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="price"
                            value={price}
                            onChange={onChangePrice}
                        />
                    </div>
                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <div className="form-group">
                        <Button variant="primary" onClick={(e) => delayAndGo(e, "/products")}>
                            Create
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default RegistProduct;