import React from 'react'
import styled from 'styled-components';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';
import StoryReel from '../StoryReel/StoryReel';

function Feeds() {
    return (
        <FeedsContainer>
            <StoryReel/>
            <MessageSender/>
            <Post
                profilePic="https://images.unsplash.com/photo-1579783483458-83d02161294e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                image="https://images.unsplash.com/photo-1505302548595-187075e7cdb1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                username="username"
                timestamp="here is timestamp"
                message="Today's message"
            />
             <Post
                profilePic="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                image="https://images.unsplash.com/photo-1527907440866-d9ccd3e05491?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                username="usernametwo"
                timestamp="here is second timestamp"
                message="Second day's message"
            />
            
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
