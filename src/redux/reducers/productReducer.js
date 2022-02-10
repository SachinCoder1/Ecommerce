import * as actionType from '../constants/productConstants'


export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionType.PRODUCTS_SUCCESS:
            return { products: action.payload }
        case actionType.PRODUCTS_FAIL:
            return { error: action.payload }
        default: return state;
    }
}

export const getProductDetailReducer = (state = { product: [] }, action) => {
    switch (action.type) {
        case actionType.PRODUCTS_DETAIL_SUCCESS:
            return { product: action.payload }
        case actionType.PRODUCTS_DETAIL_FAIL:
            return { error: action.payload }
        default: return state
    }
}


export const cartReducer = (state= {cartItems : []}, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            const item = action.payload
            const exist = state.cartItems.find(product => product.id === item.id)
            if(exist) return;

            return { ...state, cartItems: [...state.cartItems, item]}
            case actionType.REMOVE_FROM_CART : 
            return {...state, cartItems: state.cartItems.filter(product=> product.id !== action.payload)}
        default: return state
    }
}