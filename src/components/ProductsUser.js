import React, { useState, useEffect } from "react";
import ProductService from "../services/product.services";
import ProductCardUser from "./ProductCardUser";

const ProductsUser = (props) => {
    const [prodContent, setProdContent] = useState([]);

    useEffect(() => {
        ProductService.getProductListUser().then(
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
            </div>
            <div className="col-md-12 list_products">
                {prodContent.map((product, index) => (
                    <ProductCardUser productData={product} key={index} />
                ))}
            </div>
        </div>
    )
}

export default ProductsUser;