import React, { useEffect } from 'react'
import styled from 'styled-components'

import { getProductDetail } from '../../../redux/actions/productAction'


import { useSelector, useDispatch } from 'react-redux'

import { useParams } from 'react-router-dom'
import Left from './DetailBody/Left'
import Right from './DetailBody/Right'


function ProductDetails() {
    const { id } = useParams()
    const dispatch = useDispatch()

    const { product } = useSelector(state => state.getProductDetail)

    useEffect(() => {

        dispatch(getProductDetail(id))

    }, [dispatch])

    return (
       <DetailCont>
           <Left product={product}/>
       {product.title && <Right title={product.title.shortTitle} description={product.description} price={product.price.cost} mrp={product.price.mrp} discount={product.price.discount} />}
       </DetailCont>
    )
}

export default ProductDetails

const DetailCont = styled.div`
display:flex;
border-top:1px solid rgba(0,0,0,0.2);
width:95vw;
min-height:100vh;
padding:10px 10px;
margin-top:70px;

@media (max-width:768px){
flex-direction:column;
width:90vw;
border:none;
   
}
`