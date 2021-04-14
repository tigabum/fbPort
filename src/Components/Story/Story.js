import { Avatar } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';

function Story({name, profilePic, image} ) {
    return (
        <StoryContainer image={image} >
            <AvatarContainer>
                 <Avatar style={{border:"5px solid #2e81f4", margin:"10px"}} src={profilePic} />

            </AvatarContainer>
                
                    <h4>{name} </h4>
                    </StoryContainer>
    )
}

export default Story

const StoryContainer = styled.div`
position:relative;
top:0;
background-repeat:no-repeat;
background-image:  ${props => `url(${props.image})`};
background-size:cover;
background-position:center center;
width:120px;
height:200px;
margin-right:10px;
box-shadow: 1px 10px 20px -7px rgba(0,0,0,75);
border-radius:10px;
transition:transform 100ms ease-in;
cursor:pointer;

:hover{
    transform:scale(1.07);
}
h4{
    position:absolute;
    bottom:0;
    color:white;
    left:10px;
}

`
const AvatarContainer = styled.div`
    

`

