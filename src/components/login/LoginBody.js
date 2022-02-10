import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';


function LoginBody() {
    return (
        <UpperPart>

            <InputFeild>

                <TextField id="standard-basic" label="Enter Email/Mobile number" variant="standard" />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
            </InputFeild>

            <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
            <Button>
                <button>Login</button>
            </Button>
        </UpperPart>
    )
}

export default LoginBody
const UpperPart = styled.div`
p{
    padding:0px 40px;
    color:rgba(0,0,0,0.5);
    font-size:12px;

}

`

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
    margin:0px 10px;
    button{
   padding:15px 10px;

    }
}
`




