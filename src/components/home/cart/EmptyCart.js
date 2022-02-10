import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function EmptyCart() {
    return (
        <EmptyCont>
            <h3>My cart</h3>
            <Center>
                <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
                <h5>Missing Cart items?</h5>
                <p>Add items to cart, See added products here </p>
               <Link to={'/'}>
               <button>Add now</button>
               </Link> 
            </Center>
        </EmptyCont>
    )
}

export default EmptyCart

const EmptyCont = styled.div`
width:87vw;
margin:65px auto 10px auto;
background-color:white;
min-height:70vh;
border:1px solid rgba(0,0,0,0.2);
padding:10px 10px;
`

const Center = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
height:65vh;
img{
    width:20%;
    object-fit:cover;
    padding:10px 10px;
}
h5{

    padding:10px 10px;
    font-size:20px;

}
p{

    padding:10px 10px;font-size:14px;

}
button{
    margin:10px 10px;
    padding:10px 27px;
    color:white;
    background-color:#fb641b;
    cursor:pointer;
    border:none;

}
a{
   text-decoration:none;
   color:white;
}
`
