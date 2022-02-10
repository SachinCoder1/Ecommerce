import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';


function SignupBody() {
    return (
        <UpperPart>

            <InputFeild>

                <TextField id="standard-basic" name='firstName' label="Enter Firstname" variant="standard" />
                <TextField id="standard-basic" name='lastName' label="Enter Lastname" variant="standard" />
                <TextField id="standard-basic" name='userName' label="Enter Username" variant="standard" />
                <TextField id="standard-basic" name='email' label="Enter Enter Email" variant="standard" />
                <TextField id="standard-basic" name='number' label="Enter Mobile number" variant="standard" />
                <TextField
                    id="standard-password-input"
                    name='password'
                    label="Enter Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
            </InputFeild>

            <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
            <Button>
                <button>Signup</button>
            </Button>
        </UpperPart>
    )
}

export default SignupBody
const UpperPart = styled.div`
p{
    padding:0px 40px;
    color:rgba(0,0,0,0.5);
    font-size:12px;

}

`

const InputFeild = styled.div`
padding:0px 40px;
display:flex;
flex-direction:column;
div{
        margin-top:8px;
}
`

const Button = styled.div`
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
`