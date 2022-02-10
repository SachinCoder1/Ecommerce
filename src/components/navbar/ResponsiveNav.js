import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@mui/icons-material/Close';





import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { loginContext } from '../../context/ContextProvider'
import { useSelector } from 'react-redux'



import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';




function ResponsiveNav(props) {
    const [openNav, setopenNav] = useState(false)
    const toggleNavOpen = () => {
        setopenNav(true)
    }
    const toggleNavClose = () => {
        setopenNav(false)
    }



    const { account, setaccount } = useContext(loginContext)
    const { cartItems } = useSelector(state => state.cart)




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

            <RightMenu>
                <li onClick={toggleNavOpen}><MenuIcon /></li>

            </RightMenu>
            <RightNav show={openNav}>
                <CloseBtn>
                    <CloseIcon onClick={toggleNavClose} />
                </CloseBtn>
                <li>
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

                </li>
                <li>
                    <MoreBtn>
                        More <span><KeyboardArrowDownIcon /></span>
                    </MoreBtn>
                </li>
                <li>
                    <CartBtn>
                        <Link to={'/cart'}>

                            <Badge badgeContent={cartItems.length} color="primary">
                                <ShoppingCartIcon color="action" />
                            </Badge>
                            <span>Cart</span>
                        </Link>
                    </CartBtn>
                </li>
            </RightNav>

        </>
    )
}

export default ResponsiveNav


const RightMenu = styled.div`
display: flex;
list-style: none;
position:fixed;
right:10px; 
color:white;
top:15px;
cursor:pointer;

li{
padding: 0px 10px;
cursor: pointer;
}

`

const RightNav = styled.div`
z-index: 99999;
   position: fixed;
   bottom: 0;
   top: 0vh;
   right: 0;
   background-color: white;
   color: black;
   width: 40vw;
   list-style-type: none;
   transition: transform .5s ease-in-out;
   transform: translateX(${props => props.show ? '0' : '600px'});
   li{
       padding: 10px 10px;
       ${'' /* border-bottom: 1px solid rgba(0,0,0,0.2); */}
       font-size: 20px;
       cursor:pointer;
       .MuiSvgIcon-root{
           color:black;
       }
   }
   a{
       color: black;
       text-decoration: none;
   }
`


const CloseBtn = styled.div`
 display: flex;
 ${'' /* translate: translateX(200px); */}
 ${'' /* margin-right: -200px !important; */}
 justify-content: end;
 cursor: pointer;
 margin-right: 20px;
 color:black;
 .MuiSvgIcon-root{
     font-size:40px;
 }
`
const LoginBtn = styled.div`
background-color:#0C73EB;
color:white;
padding:5px 15px;
margin:0px 20px;
cursor:pointer;
`
const MoreBtn = styled.div`
cursor:pointer;

display:flex;
align-items:center;
margin:0px 20px;
color:black;


span{
    transition:all 250ms ease;
    .MuiSvgIcon-root{
    color:black;

}
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

color:black;
a{
    text-decoration:none;
    color:black;
    .MuiSvgIcon-root{
    color:black;
}
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
        padding:0px 5px;
    }
}

`