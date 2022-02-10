import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

import { carouselData } from '../../DATA/CarouselData'


function Carousel() {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        accessibility: true,
    };
    return (
        <>
            <SlideCont>
                <Slider {...settings}>
                    {
                     carouselData && carouselData.map((image, index) => {
                            return (

                                <img src={image.imageSrc} alt="" key={index} />
                            )
                        })
                    }

                </Slider>
            </SlideCont>
        </>
    )
}

export default Carousel

const SlideCont = styled.div`
margin:15px 10px;
overflow:hidden;
  div{
 margin: auto;
 width:98vw;
 height:35vh;

@media(max-width:768px){
    height:20vh;
}
  }
  img{
    object-fit: cover;
    ${'' /* border: 4px solid transparent; */}
    ${'' /* border-radius: 4px; */}
    ${'' /* margin: auto; */}
    width: 100%;
    height:100%;
    cursor: pointer;
  }

  .slick-next{
margin-right:45px;

:before{
    padding:20px 5px;
    color:black;
    background:white;
    opacity:1;
    border-radius:3px;
}



@media (max-width:768px){
    margin-right:45px;
    :before{
        padding:10px 5px;
    }
}
  }

  .slick-prev{
        margin-left:25px;
        z-index:1;
      :before{
        padding:20px 5px;
        color:black;
        background:white;
        border-radius:3px;
        opacity:1;
      }
      @media (max-width:768px){
    :before{
        padding:10px 5px;
    }
}
  }
`

