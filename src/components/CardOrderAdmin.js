import React from 'react'
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardOrderAdmin = () => {
    return (
        <Card border="primary" style={{ width: '20rem', height: "20rem" }}>
            <Card.Body>
                <Card.Title style={{ textAlign: "center" }}><h3>Orders</h3></Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                    <label style={{ fontSize: "20px" }}>In this module you can create, list, cancel, and delete orders</label>
                </Card.Text>
            </Card.Body>
            <Link to="/orders" className="btn btn-primary">Go to Order Page</Link>
        </Card>

    );
}

export default CardOrderAdmin;