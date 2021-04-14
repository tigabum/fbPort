import { Avatar } from '@material-ui/core';
import React,{useState}  from 'react'
import styled from 'styled-components';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


function MessageSender() {

    const [fellings, setFellings] = useState("");
    const [imageURL, setImageURL] = useState("");
   
   
    const handleSubmit = (event)=>{

        event.preventDefault();
        setFellings("");
        setImageURL("");
       
     
    }


    return (
        <MessageSenderContainer>
                {/* top issues */} 
                <MessageSenderTop>
                    <Avatar/>
                    
                     <Form onSubmit={handleSubmit} >
                        <Input
                         value={fellings}
                              placeholder={`What's on your mind?`}
                              onChange={(e)=>setFellings(e.target.value) }
                        />
                        <InputImage
                         value={imageURL}
                         onChange={(e)=>setImageURL(e.target.value)}
                        placeholder="image URL(Optional)"
                            />

                        <button type="submit" >
                            Submit
                            </button>
                       </Form>
                    
                   

                </MessageSenderTop>
          
           <MessageSenderBottom>
                <EmotionIcon>
                        <VideocamIcon style={{color:'red'}} />
                        <h4>Live Video</h4>
                    </EmotionIcon>
                    <EmotionIcon>
                        <PhotoLibraryIcon style={{color:"green"}}  />
                        <h4>Photo/Video</h4>
                    </EmotionIcon>
                    <EmotionIcon>
                        <InsertEmoticonIcon style={{color:'yellow'}} />
                        <h4>Feeling/Activity</h4>
                    </EmotionIcon>
                    </MessageSenderBottom>
            {/* bottom issues */}

        </MessageSenderContainer>
    )
}

export default MessageSender

const MessageSenderContainer = styled.div`
background-color:white;
width:100%;
margin-top:20px;
display:flex;
flex-direction:column;
border-radius:10px;
box-shadow: 0px 5px 7px -7px rgba(0,0,0.75);
padding:10px;
`
const MessageSenderTop = styled.div`
  display: flex;
    border-bottom: 1px solid #eff2f5;
    padding-bottom: 15px;
    padding: 15px;
button{
    margin-left:5px;
    border:none;
    outline-width:0;
    padding:5px;
    border-radius:999px;
    display:none;
}
`
const Form = styled.form`
  flex:1;
    display:flex;

`
const Input = styled.input`
margin-left:10px;
flex:1;
    border:none;
    outline-width:0; 
    padding:10px;
    border-radius:999px;
    background-color:#eff2f5;


`
const InputImage = styled.input`
margin-left:10px;
    border:none;
    outline-width:0;
    background-color:#eff2f5;
    padding:10px;
    border-radius:999px;
    width:30%;

`



 const MessageSenderBottom = styled.div`
 display:flex;
 justify-content:space-between;
 margin-right:10px;
 margin-left:10px;
 ` 
const EmotionIcon = styled.div`
display:flex;
align-items:center;
margin-left:10px;
margin-right:20px;
 cursor:pointer;
:hover{
    background-color:#eff2f5;
    border-radius:20px;  
}
`   