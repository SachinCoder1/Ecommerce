import React, { useState } from 'react'
import styled from 'styled-components'
import Btns from './Btns'
import Login from '../login/Login'


// Importing components

import Logo from './Logo'
import Search from './Search'


function Navbar(props) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Login open={open} setOpen={setOpen} />
            <NavCont>
                <LeftCont>
                    <Logo />
                    <Search />
                </LeftCont>
                <RightCont>
                    <Btns setOpen={setOpen}/>
                </RightCont>
            </NavCont>
        </>
    )
}

export default Navbar


const NavCont = styled.div`
z-index:2;
position:fixed;
top:0;
max-height:50px;
width:100vw;
display:flex;
padding:10px 10px;
align-items:center;
justify-content:space-evenly;
background-color: #0C73EB;



`

const LeftCont = styled.div`
width:40vw;
display:flex;
align-items:center;
margin:0px 45px;
@media (max-width:768px){
   width:25vw; 
   justify-content: flex-end;
   margin-left:150px;
}
`
const RightCont = styled.div`
width:30vw;
@media (max-width:768px){
   width:0;
}
`
