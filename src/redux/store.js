import {createStore, combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'

// importing reducers

import {getProductsReducer, getProductDetailReducer, cartReducer} from './reducers/productReducer'

const reducers = combineReducers({
    getProducts: getProductsReducer,
    getProductDetail: getProductDetailReducer,
    cart : cartReducer
})

const middleware = [thunk]


const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store;