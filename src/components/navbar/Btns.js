import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { loginContext } from '../../context/ContextProvider'
import { useSelector } from 'react-redux'

// Importing MUI icons.

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import ResponsiveNav from './ResponsiveNav';





function Btns(props) {
    const { account, setaccount } = useContext(loginContext)
    const { cartItems } = useSelector(state => state.cart)


    // menu


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        setaccount("")
    }
    return (
        <>
            <BtnCont>
                <>
                    {
                        !account ?
                            <>
                                <LoginBtn onClick={() => props.setOpen(true)}>
                                    Login
                                </LoginBtn>
                            </>
                            :

                            <>


                                <p id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}>
                                    {account}
                                </p>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={() => { handleClose(); logout() }}>Logout</MenuItem>
                                </Menu>
                            </>
                    }
                </>

                <MoreBtn>
                    More <span><KeyboardArrowDownIcon /></span>
                </MoreBtn>

                <CartBtn>
                    <Link to={'/cart'}>

                        <Badge badgeContent={cartItems.length} color="primary">
                            <ShoppingCartIcon color="action" />
                        </Badge>
                        <span>Cart</span>
                    </Link>
                </CartBtn>


            </BtnCont>
            <Responsive>
                <ResponsiveNav setOpen={()=>props.setOpen(true)}/>
            </Responsive>
        </>

    )
}

export default Btns

// Styles


// Main btn container

const BtnCont = styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;
color:white;
font-weight:600;
font-size:16x;

@media (max-width:768px){
display:none;

}

p{
    :nth-child(1){
        cursor:pointer;
        text-transform:capitalize;
    }
}

`

const LoginBtn = styled.div`
background-color:white;
color:#0C73EB;
padding:5px 25px;
margin:0px 20px;
cursor:pointer;

`

const MoreBtn = styled.div`
cursor:pointer;

display:flex;
align-items:center;
margin:0px 20px;
span{
    transition:all 250ms ease;
}
    :hover{
        span{

        transform: rotate(180deg);
        }
    }


`

const CartBtn = styled.div`
cursor:pointer;
margin:0px 20px;

color:white;
a{
    text-decoration:none;
    color:white;
}
.MuiSvgIcon-root{
    color:white;
}
span{
    :nth-child(1){
        .MuiBadge-badge{
        ${'' /* display:none; */}
        background-color:red;
        padding:0px 0px;

        }
    }
    :nth-child(2){
        padding:0px 15px;
    }
}

`

const Responsive = styled.div`
display:none;
@media (max-width:768px){
  display:block;
}

`
