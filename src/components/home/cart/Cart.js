import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'
import CartBody from './CartBody'
import EmptyCart from './EmptyCart'
import {removeFromCart} from '../../../redux/actions/productAction'

function Cart() {
    const dispatch = useDispatch()

    const {cartItems} = useSelector(state=> state.cart)


   const removeItemFromCart = (id)=>{
        dispatch(removeFromCart(id))
   }

    return (
        <CartCont>
        {
            cartItems.length > 0 ?  <CartBody cartItems={cartItems} removeItemFromCart={removeItemFromCart}/> : <EmptyCart />
        }
        </CartCont>
    )
}
export default Cart

const CartCont = styled.div`
margin-top:0px;
width:98vw;
min-height:100vh;
background-color:#f0f0f0;
@media (max-width:768px){
   width:90vw;
}
`
