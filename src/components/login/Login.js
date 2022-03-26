import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import { signupAuthen, loginAuthen } from '../../apis/api';
import { loginContext } from '../../context/ContextProvider'


// MUI import 

import CloseIcon from '@mui/icons-material/Close';
// import LoginBody from './LoginBody';
// import SignupBody from './SignupBody';


function Login(props) {


    const [switchMethod, setswitchMethod] = useState("login")
    const { setaccount } = useContext(loginContext)
    const [isError, setisError] = useState(false)

    // signup

    const [inputFeilds, setinputFeilds] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        number: '',
        password: ''
    })



    const signupUser = async () => {
        let response = await signupAuthen(inputFeilds)
        if (!response) {
            return;
        }
        setaccount(inputFeilds.firstName)
        props.setOpen(false)
    }

    const handleInputChange = (e) => {
        setinputFeilds({ ...inputFeilds, [e.target.name]: e.target.value })
    }


    // login

    const [loginInputFeilds, setloginInputFeilds] = useState({
        userName: '',
        password: ''
    })
    const handleLoginInputChange = (e) => {
        setloginInputFeilds({ ...loginInputFeilds, [e.target.name]: e.target.value })

    }

    const handleLogin = async () => {
        let response = await loginAuthen(loginInputFeilds)
        if (!response) {
            setisError(true)
            return;
        }


        setaccount(loginInputFeilds.userName)
        props.setOpen(false)
        setisError(false)


    }



    return (
        <>
        {/* If login */}
            {props.open === true &&
                <LoginCont>
                    <CloseBtn>
                        <CloseIcon onClick={() => { { props.open === true && props.setOpen(false) } setswitchMethod("login") }} />
                    </CloseBtn>
                    <MainCont>
                        <LeftPart>
                            <Upperpart>
                                {
                                    <>
                                        {
                                            switchMethod === "login" ?
                                                <>
                                                    <h2>Login</h2>
                                                    <p>Get access to your Orders, Wishlist and Recommendations</p>
                                                </>
                                                :
                                                <>
                                                    <h2>Looks like you're new here!</h2>
                                                    <p>Sign up with your mobile number to get started</p>
                                                </>
                                        }
                                    </>
                                }
                            </Upperpart>
                            <Lowerpart>
                                <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" alt="Login" />
                            </Lowerpart>
                        </LeftPart>
                        <RightPart>
                            {
                                <>
                                    {
                                        switchMethod === "login" ?
                                            <>
                                                <UpperPart>

                                                    <InputFeild>

                                                        <TextField id="standard-basic" onChange={(e) => handleLoginInputChange(e)} name="userName" label="Enter username" variant="standard" />
                                                        <TextField id="standard-basic" onChange={(e) => handleLoginInputChange(e)} name="password" label="Password" variant="standard" />
                                                        {isError && <p>Username or password incorrect. Try again with correct details</p>}
                                                    </InputFeild>

                                                    <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                                                    <Button onClick={() => handleLogin()}>
                                                        <button>Login</button>
                                                    </Button>
                                                </UpperPart>
                                                <SignupBtn onClick={() => setswitchMethod("signup")}>
                                                    <p>New to Flipkart? Create an account</p>
                                                </SignupBtn>
                                            </>
                                            :

                                            <>
                                            {/* If signup */ }
                                                <UpperPart>
                                                    <InputSignup>

                                                        <TextField id="standard-basic" onChange={(e) => handleInputChange(e)} name='firstName' label="Enter Firstname" variant="standard" />
                                                        <TextField id="standard-basic" onChange={(e) => handleInputChange(e)} name='lastName' label="Enter Lastname" variant="standard" />
                                                        <TextField id="standard-basic" onChange={(e) => handleInputChange(e)} name='userName' label="Enter Username" variant="standard" />
                                                        <TextField id="standard-basic" onChange={(e) => handleInputChange(e)} name='email' label="Enter Enter Email" variant="standard" />
                                                        <TextField id="standard-basic" onChange={(e) => handleInputChange(e)} name='number' label="Enter Mobile number" variant="standard" />
                                                        <TextField id="standard-basic" onChange={(e) => handleInputChange(e)} name='password' label="Enter New Password" variant="standard" />
                                                    </InputSignup>

                                                    <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                                                    <SignupBtns onClick={() => { signupUser() }}>
                                                        <button>Signup</button>
                                                    </SignupBtns>
                                                </UpperPart>
                                                <SignupBtn onClick={() => setswitchMethod("login")}>
                                                    <p>Alreday a user, Login</p>
                                                </SignupBtn>
                                            </>
                            }
                        </>
                            }
                    </RightPart>
                </MainCont>
                </LoginCont>
            }
        </>
    )
}

export default Login

const LoginCont = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:99999;
background-color:rgba(0,0,0,0.7);
`

const MainCont = styled.div`
background-color:white;
display:flex;
width:50vw;
height:70vh;
margin:100px auto;
@media (max-width:768px){
   width:95vw;
   ${'' /* flex-direction:column; */}
}
`

const CloseBtn = styled.div`
position:absolute;
top:90px;
right:280px;
color:white;
cursor:pointer;
.MuiSvgIcon-root{
    font-size:40px;
}

@media (max-width:768px){
   left:4px;
   right:0px;
   top:62px;
}
`

const LeftPart = styled.div`
width:40%;
background-color:#0C73EB;
height:100%;
color:white;
display:flex;
flex-direction:column;
justify-content:space-between;
h2{
    padding:20px 20px 10px 20px;
    font-size:30px;
}
p{
    width:80%;
    padding:20px 20px 10px 20px;
    font-size:20px;
    line-height:25px;
    color:#f2f2f2;
}
`

const Upperpart = styled.div`

`

const Lowerpart = styled.div`
margin:30px auto;
@media (max-width:768px){
   margin-left:-10px;
}
`







const RightPart = styled.div`
width:60%;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-between;


${'' /* background-color:green; */}
`



const SignupBtn = styled.div`
color:#0C73EB;
margin:20px 60px;
cursor:pointer;
font-weight:650;
@media (max-width:768px){
   margin:10px 10px;
}
`




const UpperPart = styled.div`
p{
    padding:0px 40px;
    color:rgba(0,0,0,0.5);
    font-size:12px;

}

`


// login css

const InputFeild = styled.div`
padding:30px 40px;
display:flex;
flex-direction:column;
justify-content:space-between;
div{
    :nth-child(1){
        margin:20px 0px;
    }
}
p{
    font-size:12px;
    color:red;
    margin:10px -43px;
}
`

const Button = styled.div`
margin:0px 50px;
button{
    padding:15px 130px;
    background-color:#fb641b;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    border: none;
    margin:10px auto;
    color:white;
    font-weight:600;
    font-size:16px;
    cursor:pointer;
}

@media (max-width:768px){
  margin:10px 40px;
  button{
      padding:10px 20px;
  }

}
`




// signup css




const InputSignup = styled.div`
padding:0px 40px;
display:flex;
flex-direction:column;
div{
        margin-top:8px;
}
`

const SignupBtns = styled.div`
margin:0px 50px;
button{
    padding:15px 130px;
    background-color:#fb641b;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    border: none;
    margin:3px auto;
    color:white;
    font-weight:600;
    font-size:16px;
    cursor:pointer;
}

@media (max-width:768px){
    margin:2px 45px;
    button{

   padding: 15px 20px;
    }
}
`