import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductService from "../services/product.services";
import ProductCard from "./ProductCard";

const Products = () => {
    const [prodContent, setProdContent] = useState([]);

    useEffect(() => {
        ProductService.getProductList().then(
            (response) => {
                setProdContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setProdContent(_content);
            }
        )
    }, [])
    return (
        <div className="container">
            <div className="product_header">
                <div className="col-sm-10">
                    <h2>Products</h2>
                </div>

                <div className="col-sm-2">
                    <Link to="/form-product" className="btn btn-primary">Create Product</Link>
                </div>
            </div>
            <div className="col-md-12 list_products">
                {prodContent.map((product, index) => (
                    <ProductCard productData={product} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Products;