import * as actionTypes from "../constants/actionTypes";
import {getFilters, getProducts} from "../services/webService";

const receiveProducts = (payload) => ({
    type: actionTypes.RECEIVE_PRODUCTS,
    payload
});

export const getProductsAction = () => dispatch => {
    getProducts().then((res) => {
        if (res.data.success) {
            dispatch(receiveProducts(res.data.success));
        }
    }).catch((err) => {
        console.log("getProductsErr", err);
    })
};