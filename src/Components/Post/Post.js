import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



function Post({username, profilePic, timestamp, message,image} ) {
    const[like, setLike] =useState(null);
  
    return (
        <PostContainer>
         
                 <TopContent>
                     <Avatar src= {profilePic}/>
                      <TopDivide>
                        <Heading>{username} </Heading>
                         <Parag>{new Date(timestamp?.toDate()).toUTCString()} </Parag>
                      </TopDivide>
                         
                        
                 
           </TopContent>

            <BodyContent>
               <BodyParag> {message} </BodyParag> 
            </BodyContent>

           
                <BottomContent>
                  <img src={image} alt="bottom"/>

                </BottomContent>

                <PostIcons>
                    <PostIcon>
                        <ThumbUpIcon onClick={()=>setLike(like+1) } />
                        <Text  >{like} Like </Text>


                    </PostIcon>
                    <PostIcon>
                        <ChatBubbleOutlineIcon/>
                        <Text>Comment</Text>

                    </PostIcon>
                    <PostIcon>
                        <NearMeIcon/>
                        <Text>Share</Text>

                    </PostIcon>
                    <PostIcon>
                        <AccountCircleIcon/>
                        <ExpandMoreIcon/>

                    </PostIcon>

                </PostIcons>

            
        </PostContainer>
    )
}

export default Post

const PostContainer = styled.div`
width:100%;
margin-top:15px;
border-radius:15px;
background-color:white;
box-shadow: 0px 5px 7px -7px rgba(0,0,0,0.75);
img{
    width:100%;
}



`
const TopContent = styled.div`
display:flex;
position:relative;
align-items:center;
padding-left:10px;




`
const TopDivide = styled.div`
flex-direction:column;
display:flex;
align-items:center;
margin-left:10px;
padding-bottom:5px;



`
const Heading = styled.h4`

font-size:medium;

`
const Parag = styled.p`
margin-top:-20px;
font-size:small;
color:gray;

`

const BodyContent = styled.div`
`
const BodyParag = styled.p`
margin-top:10px;
margin-bottom:10px;
padding:15px 25px;


`

const BottomContent = styled.div`

`
const PostIcons = styled.div`
display:flex;
padding-top:10px;
justify-content:space-evenly;
border-top:1px solid lightgray;
padding:5px;
color:gray;
cursor:pointer;
font-size:medium;

`
const PostIcon = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;

:hover{
    background-color:#eff2f5;
    border-radius:10px;
}


`
const Text = styled.p`
margin-left:10px;

`