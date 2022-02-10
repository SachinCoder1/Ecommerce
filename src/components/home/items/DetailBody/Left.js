import React from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../../../redux/actions/productAction'
import {useNavigate} from 'react-router-dom'
import {payUsingPaytm} from '../../../../apis/api'

import {post} from '../../../../paymentUtils/paytm'

function Left({product}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const addItem = ()=>{
           dispatch(addToCart(product.id))
           navigate('/cart')
    }

    const buyItem = async ()=>{
        let response = await payUsingPaytm({amount: 500, email: 'gurjarsachin156@gmail.com'})
        let information = {
            action : "https://securegw-stage.paytm.in/order/process",
            params: response
        }

        post(information)

    }
    return (
        <LeftCont>
            <Img>
                <img src={product.detailUrl} alt="" />
            </Img>
            <ButtonCont>
                <button onClick={()=> addItem()}>
                    Add to cart
                </button>
                <button onClick={()=>{buyItem()}}>
                    Buy Now
                </button>
            </ButtonCont>
        </LeftCont>
    )
}

export default Left

const LeftCont = styled.div`
${'' /* position:fixed; */}
width:40%;
border-right:1px solid rgba(0,0,0,0.3);
display:flex;
flex-direction:column;
align-items:center;
${'' /* justify-content:center; */}

@media (max-width:768px){
   width:100%;
   border:none;

}

`

const Img = styled.div`
width:70%;
margin:20px auto;
img{
    width:100%;
padding:10px 20px;
    object-fit:cover;
    height:100%;
}

@media (max-width:768px){
   width:50%;
}

`


const ButtonCont = styled.div`
display:flex;
margin:0px 20px;
button{
    padding:17px 57px;
    font-size:20px;
    color:white;
    border-radius:2px;
    margin:20px 5px;
    border:none;
    cursor:pointer;
    :nth-child(1){
       background-color:#ff9f00; 
    }
    :nth-child(2){

       background-color:#fb641b; 
    }
}

@media (max-width:768px){
   button{
      padding: 15px 23px;
      font-size:17px;
   }
}
`