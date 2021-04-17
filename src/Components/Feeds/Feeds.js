import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import db from '../../firebase';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';
import StoryReel from '../StoryReel/StoryReel';

function Feeds() {
    const[posts, setPosts] = useState([]);
    useEffect(()=>{
                db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot)=>
                    setPosts(snapshot.docs.map((doc)=>({post:doc.data()}))));
}, []);
         
           
    return (
        <FeedsContainer>
            <StoryReel/>
            <MessageSender/>
            {posts.map((item,index)=>(
                
                      <Post
                      key={index+item.post.username}
                      profilePic={item.post.profilePic}
                      message={item.post.message}
                     timestamp={item.post.timeestamp}
                    image={item.post.image}
                    username={item.post.username}
                    
                />

             
              

            )
                
            )}
           
            
            {/* StoryReel  */}
            {/* MessageSender */}
            {/* Posts */}
        </FeedsContainer>
    )
}

export default Feeds

const FeedsContainer = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px 140px;
    justify-content:center;
    align-items:center;
    

`
