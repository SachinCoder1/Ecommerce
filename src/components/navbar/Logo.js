import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

// MUI - icons 
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';

function Logo() {
    return (
        <LogoCont>
        <Link to="/">
            <img src="/images/flipkart-image.png" alt="Flipkart" />
            <p>Explore <span>Plus <HealthAndSafetyOutlinedIcon /></span> </p>
        </Link>
        </LogoCont>
    )
}

export default Logo

// -------------------------------------------------------------------------


// css - styles



// -- Logo container --

const LogoCont = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    max-height:50px;
    color:white;
    cursor:pointer;
    a:-webkit-any-link{
        text-decoration:none;
        color:white;
    }



 ${'' /* Image */}

   
img{
    width:100px;
    object-fit:cover;
    @media (max-width:768px){
   ${'' /* width:4%; */}
   margin-top:10px;
}
}


 ${'' /* Paragraph */}


p{
    @media (max-width:768px){
   display:none; 
}
    display:flex;
    align-items:center;
    font-style:italic;
    span{
    padding:0px;
    color:#F8E831;
    display:flex;
    align-items:center;
    .MuiSvgIcon-root{
        font-size:20px;
    }
}


 ${'' /* On hover */}

:hover{
    text-decoration:underline;
    }
}

`
