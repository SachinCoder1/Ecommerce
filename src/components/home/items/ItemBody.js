import React from 'react'
import styled from 'styled-components'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};
function ItemBody({ title, products }) {
    return (


        <ItemCont>
            <TitleCont>
                <h3>{title}</h3>
                <button>View All</button>
            </TitleCont>
            <hr />

            <Carousel responsive={responsive}>
                {
                    products && products.map((product, index) => {
                        return (
                            <Link to={`/products/${product.id}`} key={index}>
                                <Item key={index}>
                                    <img src={product.url} alt="" />
                                    <p><b>{product.title.shortTitle}</b></p>
                                    <p>{product.discount}</p>
                                    <p>{product.tagline}</p>
                                </Item>
                            </Link>

                        )
                    })
                }
            </Carousel>

        </ItemCont>
    )
}

export default ItemBody

const ItemCont = styled.div`
${'' /* width:100vw; */}
padding:10px 10px;
margin:10px 10px;
background-color:#fff;
z-index:-1;
hr{
    margin-top:10px;
    background-color:rgba(0,0,0,0.2);
    border:none;
    height:1px;
}
a{
    color:black;
    text-decoration:none;
}
`
const Item = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
cursor:pointer;
z-index:-1;
p{
    padding:5px 0px;
    :nth-child(3){
        color:green;
    }
    :nth-child(4){
        color:rgba(0,0,0,0.7);
    }
}
img{
    width:50%;
transition: all 250ms ease;
    object-fit:cover;
    margin-top:20px;
    margin-bottom:10px;

}

:hover{
    img{
       transform:scale(1.1);
    }
}

`


const TitleCont = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

    padding:5px 10px;
    font-size:25px;
    @media (max-width:768px){
        font-size:20px;
    }

button{
    background-color:#0C73EB;
    padding:10px 15px;
    color:white;
    cursor:pointer;
    border:none;
}

`