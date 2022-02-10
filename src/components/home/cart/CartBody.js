import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { payUsingPaytm } from '../../../apis/api'

import { post } from '../../../paymentUtils/paytm'


function CartBody({ cartItems, removeItemFromCart }) {
    const [count, setcount] = useState(1)
    const handleDecr = () => {
        setcount(count => count - 1)
    }

    const handleIncr = () => {
        setcount(count => count + 1)
    }

    const [price, setprice] = useState(0)
    const [discount, setdiscount] = useState(0)

    const getTotalPrice = () => {
        let price = 0;
        let discount = 0;
        cartItems.map((cartItem) => {

            price += cartItem.price.cost
            discount += cartItem.price.mrp - price
            setprice(price)
            setdiscount(discount)

        })

    }

    useEffect(() => {
        getTotalPrice()

    }, [cartItems])


    const buyItem = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'gurjarsachin156@gmail.com' })
        let information = {
            action: "https://securegw-stage.paytm.in/order/process",
            params: response
        }

        post(information)

    }

    return (
        <CartBodyCont>
            <LeftCont>
                <h2>
                    My Cart ({cartItems.length})
                </h2>
                <hr />

                {
                    cartItems && cartItems.map((cartItem) => {
                        return (
                            <>
                                <ItemCont key={cartItem.title.longTitle}>
                                    <ImageCont>
                                        <img src={cartItem.url} alt="" />
                                        <span>
                                            <button onClick={handleDecr} disabled={count === 1}>&#8211;</button> <span>{count}</span>  <button onClick={handleIncr}>&#43;</button>
                                        </span>
                                    </ImageCont>
                                    <DetailCont>
                                        <h4>{cartItem.title.longTitle}</h4>
                                        <p>seller: cover hb</p>
                                        <p>{cartItem.tagline}</p>
                                        <Price>
                                            <span>  ₹{cartItem.price.cost} </span>
                                            <span><strike>₹{cartItem.price.mrp} </strike></span>
                                            <span>{cartItem.price.discount}</span>
                                        </Price>
                                        <BtnCont>
                                            <button onClick={() => removeItemFromCart(cartItem.id)}>Remove</button>
                                        </BtnCont>
                                    </DetailCont>
                                </ItemCont>
                                <hr />
                                <CheckOutBtn>
                                    <button onClick={() => buyItem()}>Checkout</button>
                                </CheckOutBtn>
                            </>
                        )
                    })
                }


            </LeftCont>
            <RightCont>
                <h2>
                    PRICE DETAILS
                </h2>
                <hr />
                <PriceCont>
                    <p> Price ({cartItems.length} items)  <span>₹{price}</span></p>
                    <p> Discount  <span>&#8211;₹{discount}</span></p>
                    <p> Buy more & save more  <span>&#8211;₹100</span></p>
                    <p> Delivery Charges  <span>₹60</span></p>
                    <hr />
                    <p> Total Amount  <span>₹{price + 60 - discount}</span></p>
                    <hr />
                    <p>You will save ₹{discount} on this order </p>

                </PriceCont>
            </RightCont>
        </CartBodyCont>
    )
}

export default CartBody


const CartBodyCont = styled.div`
margin:65px auto;
display:flex;
justify-content:center;
${'' /* width:90vw; */}
@media (max-width:768px){
  flex-direction:column;
}
`


const LeftCont = styled.div`
width:60%;
position:relative;

background-color:white;
margin:5px 10px;
padding:10px 15px;
@media (max-width:768px){
   width:90%;
}
h2{
    margin:20px 0px;
}
hr{
    margin:15px 0px;
    background-color:rgba(0,0,0,0.2);
    border:none;
    height:1px;
}
`

const ItemCont = styled.div`
display:flex;
margin:10px 0px;
${'' /* align-items:center; */}
${'' /* justify-content:center; */}
`

const ImageCont = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:15%;
padding:7px 10px;
img{
    width:100%;
    object-fit:cover;
}

span{
    ${'' /* width:20%; */}
    margin:10px 0px;
    display:flex;
align-items:center;
justify-content:center;

    button{
        padding:5px 10px;
        background-color:#fff;
        border:1px solid rgba(0,0,0,0.4);
        border-radius:30%;
        cursor:pointer;
        margin:1px 5px;
    }

    span{
        padding:3px 20px;
        border:1px solid rgba(0,0,0,0.2);
    }
}

@media(max-width:768px){
    span{

 
    button{
       padding:5px 5px;
    }
    span{
     padding:5px 9px;
    }
}
}
`

const DetailCont = styled.div`
margin-left:15px;
h4{
    font-weight:500;
    font-size:22px;
    padding:16px 3px 4px 5px;
    color:rgba(0,0,0,0.9);
}
p{
    padding:0px 3px 5px 5px;
    color:rgba(0,0,0,0.4);
    :nth-child(3){
        padding-bottom:15px;
    }
}
`

const Price = styled.div`
padding:5px 5px;
display:flex;
align-items:center;

span{
    padding:0px 5px;
    font-size:14px;
    :nth-child(1){
        font-weight:560;
        font-size:19px;
        
    }
    :nth-child(2){
        color:rgba(0,0,0,0.6);

    }
    :nth-child(3){
      color:green;
    }
}
`

const BtnCont = styled.div`
margin:22px 10px 0px 0px;
button{
    background:transparent;
    border:none;
    font-size:20px;
    cursor:pointer;
    :hover{
        color:#0C73EB;
    }
}
`

const CheckOutBtn = styled.div`
${'' /* box-shadow: 0px -2px 20px 1px rgba(0,0,0,0.1); */}

button{
float:right;
padding:12px 28px;
border:none;
font-size:19px;
background-color:#fb641b;
color:white;
cursor:pointer;



}
   position:absolute;
   top:18px;
   right:18px;

`


const RightCont = styled.div`
background-color:white;
margin:5px 10px;
padding:10px 15px;
width:30%;
@media (max-width:768px){
   width:88%;
}
hr{
    margin:15px 0px;
    background-color:rgba(0,0,0,0.2);
    border:none;
    height:1px;
}
h2{
    color:rgba(0,0,0,0.7);
}
`

const PriceCont = styled.div`
p{
    display:flex;
    justify-content:space-between;
    padding:10px 10px;
    color:rgba(0,0,0,0.7);
    font-size:16px;
    :nth-child(2){
    span{ 
      color:#388e3c;
    }
    }
    :nth-child(3){
    span{ 
      color:#388e3c;
    }
    }
    :nth-child(6){
        font-size:25px;
        font-weight:600;
    }
    :nth-child(8){
      color:#388e3c;
        ${'' /* font-size:25px; */}
        font-weight:600;
    }
}
`


