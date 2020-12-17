import axios from 'axios';
import {GET_PRODUCTS} from './actionTypes';

const URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";

export function getProductsFromBackend() {
    return async function(dispatch) {
        const response = await axios.get(`${URL}`);
        return dispatch(getProducts(response.data));
    }
}

function getProducts(products) {
    return {
      type: GET_PRODUCTS,
      products,
    };
  }