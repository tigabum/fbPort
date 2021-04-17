import React from 'react'
import styled from 'styled-components';

import {auth, provider} from '../../firebase';
import { actionTypes } from '../Reducer/Reducer';
import { useStateValue } from '../Reducer/StateProvider';

function Login() {
    const[state, dispatch] = useStateValue();
        
        const signIn = () =>{
            auth.signInWithPopup(provider)
            .then((result)=> {
                console.log(result.user);
                    dispatch({
                        type:actionTypes.SET_USER,
                        user:result.user,
                    })

                console.log(result);
            } ).catch( (error) => alert(error.message))};

    return (
        <LoginContainer>

            

            <ImageContainer>
                 <ImageLogo
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"
           
           />

           <TextLogo
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1200px-Facebook_Logo_%282019%29.svg.png"
           />

            </ImageContainer>
          
           <Button type="submit" onClick={signIn} >
               Sign in

           </Button>
           <Create>Don't have an account? Create</Create>

        </LoginContainer>
    )
}

export default Login
const LoginContainer = styled.div`
display:grid;
place-items:center;
height:100vh;



`
const ImageContainer = styled.div`
display:flex;
flex-direction:column;


`

const ImageLogo = styled.img`
height:140px;
object-fit:contain;


`
const TextLogo = styled.img`
height:100px;
object-fit:contain;

`
const Button = styled.button`
width:300px;
background-color:#2e81f4;
color: #eff2f5;
font-weight:800;
padding:10px;
:hover{
    background-color:white;
    color:#2e81f4;
}

`
const Create = styled.p`
background-color:lightgray;
padding:10px;
border-radius:5px;
color:#2e81f4;
margin-top:-100px;
` 
