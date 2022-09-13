import React, { useState, useEffect } from "react";
import OrderService from "../services/order.service";
import OrderCard from "./OrderCard";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";

const Orders = () => {
    const [orderContent, setOrderContent] = useState([]);

    useEffect(() => {
        const user = AuthService.getCurrentUser().id;
        OrderService.getOrderListByUserId(user).then(
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
        <div className="container">
            <div className="product_header">
                <div className="col-sm-10">
                    <h2>Orders</h2>
                </div>
                <div className="col-sm-2">
                    <Link to="/form-order" className="btn btn-primary">Create Order</Link>
                </div>
            </div>
            <div className="col-md-12 list_order">
                {orderContent.map((order, index) => (
                    <OrderCard orderData={order} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Orders;