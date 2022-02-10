import React from 'react'
import styled from 'styled-components'

import { categories } from '../../DATA/categories'

function TopCategories() {
    return (
        <CategoryCont>
            {
               categories && categories.map((category, index) => {
                    return (

                        <CateBox key={index}>
                            <img src={category.url} alt={category.text} />
                            <span>{category.text}</span>
                        </CateBox>
                    )
                })
            }
        </CategoryCont>
    )
}

export default TopCategories

const CategoryCont = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
max-width:100vw;
background-color:#fff;
border-bottom:1px solid rgba(0,0,0,0.2);
`


const CateBox = styled.div`
cursor:pointer;
text-align:center;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:10px 10px;


img{
    width:50%;
}
    :hover{
        span{

        color:#0C73EB;
        }
    }

    @media (max-width:768px){
    padding:10px 2px;
    :nth-child(7){
            display:none;
        }
    :nth-child(8){
            display:none;
        }
    :nth-child(9){
            display:none;
        }

    span{
        display:none;
    }
    img{
        width:70%;
        

    }
}


`


