import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/order/";

const getOrderListByUserId = (userId) => {
    return axios.get(API_URL + "list/" + userId, { headers: authHeader() });
}

const postOrder = (name, details, address, user) => {
    return axios.post(API_URL + user, {
        name,
        details,
        address
    }, { headers: authHeader() });
}

const deleteOrder = (orderId) => {
    return axios.delete(API_URL + "delete/" + orderId, { headers: authHeader() });
}

const putOrderStatus = (orderId) => {
    return axios.put(API_URL + "status/" + orderId, {}, { headers: authHeader() })
}

const OrderService = {
    getOrderListByUserId,
    postOrder,
    deleteOrder,
    putOrderStatus
}

export default OrderService;