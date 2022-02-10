import React from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'
import Items from './items/Items'
import TopCategories from './TopCategories'


function Home() {
    return (
        <HomeCont>
            <TopCategories />
            <Carousel />
            <Items />
        </HomeCont>
    )
}

export default Home

const HomeCont = styled.div`
min-height:100vh;
max-width:100vw;
background-color:#f2f2f2;
margin-top:70px;
`
