import React from 'react'
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProductUser = () => {
    return (
        <Card border="primary" style={{ width: '20rem', height: "20rem" }}>
            <Card.Body>
                <Card.Title style={{ textAlign: "center" }}><h3>Products</h3></Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                    <br />
                    <label style={{ fontSize: "20px" }}>In this module you can list, and assign to order</label>
                </Card.Text>
            </Card.Body>
            <Link to="/products-user" className="btn btn-primary">Go to Product Page</Link>
        </Card>

    );
}

export default CardProductUser;