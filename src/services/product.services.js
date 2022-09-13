import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/product/";

const getProductList = () => {
    return axios.get(API_URL + "list", { headers: authHeader() });
}

const getProductListUser = () => {
    return axios.get(API_URL + "list/available", { headers: authHeader() });
}

const getProductListByOrderId = (orderId) => {
    return axios.get(API_URL + "list/order/" + orderId, { headers: authHeader() });
}

const postProduct = (name, price) => {
    return axios.post(API_URL, {
        name,
        price
    }, { headers: authHeader() })
}

const putProduct = (productId, orderId) => {
    return axios.put(API_URL + "order/" + productId + "/" + orderId, {}, { headers: authHeader() });
}

const deleteProduct = (productId) => {
    return axios.delete(API_URL + "delete/" + productId, { headers: authHeader() });
}

const ProductService = {
    getProductList,
    getProductListUser,
    getProductListByOrderId,
    postProduct,
    putProduct,
    deleteProduct
}

export default ProductService;