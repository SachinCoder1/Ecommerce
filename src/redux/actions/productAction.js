import axios from 'axios'

import * as actions from '../constants/productConstants'

const url = "https://ecommercebackend4.herokuapp.com"
export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/products`)

        dispatch({ type: actions.PRODUCTS_SUCCESS, payload: data })


    } catch (error) {
        dispatch({ type: actions.PRODUCTS_FAIL, payload: error.response })
    } 
}

// product detail 

export const getProductDetail = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/products/${id}`);
        dispatch({ type: actions.PRODUCTS_DETAIL_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actions.PRODUCTS_DETAIL_FAIL, payload: error.response })
    }
}


// cart 


export const addToCart = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/products/${id}`);
        dispatch({ type: actions.ADD_TO_CART, payload: data });
    } catch (error) {
        // dispatch({ type: actions.PRODUCTS_DETAIL_FAIL, payload: error.response })
        console.log('500')
    }
} 

export const removeFromCart = (id) => (dispatch) =>{
  dispatch({type: actions.REMOVE_FROM_CART, payload: id})
}