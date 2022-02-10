import React from 'react'
import styled from 'styled-components'

// mui icons

import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

function Right({ title, description, price, mrp, discount }) {
    return (
        <RightCont>
            <Heading>
                <h3>{title}</h3>
            </Heading>
            <Price>
                <span>  ₹{price} </span>
                <span><strike>₹{mrp} </strike></span>
                <span>{discount}</span>
            </Price>
            <Rating>
                <p>4.3 <span> <StarIcon /></span></p> <span>
                    277 ratings and 34 reviews
                </span>
            </Rating>
            <Offer>
                <h5>
                    available offers
                </h5>
                <p> <span><LocalOfferIcon /></span> Special PriceGet extra 15% off (price inclusive of discount)</p>
                <p> <span><LocalOfferIcon /></span> Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card</p>
                <p> <span><LocalOfferIcon /></span> Bank OfferFlat ₹75 off on first Flipkart Pay Later order of ₹500 and above </p>

            </Offer>

            <Delievery>
                <b>
                    Get this product on this date
                </b>
            </Delievery>
            <Seller>
                <p>Seller </p>
                <p> PumaSportsIndia  <span>4.3 <StarIcon /></span> </p>

            </Seller>
            <Img>
                <img src="https://rukminim1.flixcart.com/lockin/763/182/images/CCO__PP_2019-07-14.png?q=50" alt="" />
            </Img>
            <Description>
                <h3>
                    Product Details
                </h3>
                <p>
                    {description}
                </p>
            </Description>
        </RightCont>        
    )
}

export default Right

const RightCont = styled.div`
width:60%;
padding:10px 20px;

@media (max-width:768px){
  width:100%;
  padding:10px 10px; 
}
`

const Heading = styled.div`
padding:5px 10px;
`

const Price = styled.div`
padding:5px 10px;
display:flex;
align-items:center;

span{
    padding:0px 5px;
    font-size:20px;
    :nth-child(1){
        font-weight:bolder;
        font-size:30px;
        
    }
    :nth-child(2){
        color:rgba(0,0,0,0.6);

    }
    :nth-child(3){
      color:green;
    }
}
`

const Rating = styled.div`
display:flex;
align-items:center;
padding:5px 15px;
margin-bottom:15px;

p{
background-color:#26a541;
border-radius:14px;
padding:2px 7px; 
color:white;
font-size:16px;
${'' /* vertical-align: baseline; */}
display:flex;
align-items:center;
justify-content:center;

span{

    .MuiSvgIcon-root{
        margin-top:2px;   
        font-size:16px;
        color:white;
    }

}
}
span{
    color:rgba(0,0,0,0.5);
    fonts-size:16px;
    :nth-child(2){
    padding:2px 15px;
    font-weight: 550;

    }

}

`

const Offer = styled.div`
h5{
    font-size:20px;
    text-transform:capitalize;
    padding:0px 4px 10px 4px;
}

p{
    padding:3px 5px;
    display:flex;
    ${'' /* justify-content:center; */}
    align-items:center;
    span{
        color:#26a541;
        padding:0px 5px;
    }
}
`

const Delievery = styled.div`
padding:5px 5px;
`

const Seller = styled.div`
display:flex;
width:30%;
padding:10px 0px;
justify-content:space-between;
align-items:center;



p{
    :nth-child(1){
        color:rgba(0,0,0,0.6);
    }
    :nth-child(2){
        color:#0C73EB;
        padding:0px 5px;
    }


    span{
    background-color:#26a541;
    border-radius:14px;
    padding:5px 7px; 
    color:white;
    font-size:16px;
    vertical-align: baseline;
    .MuiSvgIcon-root{
        margin-top:0px;   
        font-size:16px;
        color:white;
    }
}
}

@media (max-width:768px){
    width:60%;
   ${'' /* p{
       :nth-child(2){
           display:flex;
           align-items:center;
           span{
               margin:0px 10px;
               display:flex;
           }
       }
   } */}
}
`

const Img = styled.div`
img{
width:100%;
object-fit:cover;

}
`

const Description = styled.div`
h3{
    padding:10px 5px;
}
p{

    padding:0px 5px;
}
`
