import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/order/";

const getOrderListByUserId = (userId) => {
    return axios.get(API_URL + "list/" + userId, { headers: authHeader() });
}

const postOrder = (name, details, address, user, email) => {
    return axios.post(API_URL + user + "/" + email, {
        name,
        details,
        address
    }, { headers: authHeader() });
}

const deleteOrder = (orderId, email) => {
    return axios.delete(API_URL + "delete/" + orderId + "/" + email, { headers: authHeader() });
}

const putOrderStatus = (orderId, email) => {
    return axios.put(API_URL + "status/" + orderId + "/" + email, {}, { headers: authHeader() })
}

const OrderService = {
    getOrderListByUserId,
    postOrder,
    deleteOrder,
    putOrderStatus
}

export default OrderService;