import React, { useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import OrderService from "../services/order.service";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const RegistOrder = () => {
    const [orderName, setOrderName] = useState("");
    const [details, setDetails] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");
    const history = useNavigate();

    const onChangeName = (e) => {
        const name = e.target.value;
        setOrderName(name);
    };

    const onChangeDetails = (e) => {
        const details = e.target.value;
        setDetails(details);

    };

    const onChangeAddress = (e) => {
        const address = e.target.value;
        setAddress(address);
    };

    function delayAndGo(e, path) {
        e.preventDefault();
        setMessage("");
        if (orderName && details && address) {
            OrderService.postOrder(orderName, details, address, AuthService.getCurrentUser().id.toString(), AuthService.getCurrentUser().email.toString());

            setTimeout(() => history(path), 300);
        } else {
            setMessage("Name, Details and Address must not be empty.")
        }

    }

    return (
        <Card className="card-order" style={{ textAlign: "center", flexDirection: 'row' }}>
            <Card.Body>
                <Form onSubmit={delayAndGo}>
                    <div className="form-group">
                        <h2>Create Order</h2>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="orderName"
                            value={orderName}
                            onChange={onChangeName}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="details">Details</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="details"
                            value={details}
                            onChange={onChangeDetails}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="address"
                            value={address}
                            onChange={onChangeAddress}
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
                        <Button variant="primary" onClick={(e) => delayAndGo(e, "/orders")}>
                            Create
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default RegistOrder;