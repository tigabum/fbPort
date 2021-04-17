import React from 'react'
import styled from 'styled-components'
import {Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../Reducer/StateProvider';

function Header() {
    const[{user}, dispatch] = useStateValue();
    return (
        <Container>
            <FbLogo>
               <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" /> 

            </FbLogo>
            <HeaderLeft>
                <SearchIconLogo>
                    <SearchIcon/>
                    <SearchInput type="text" placeholder="search facebook" />
                </SearchIconLogo>
                
            </HeaderLeft>
            <HeaderCenter>
                <HeaderHome>
                    <HomeIcon/>
                </HeaderHome>
          <HeaderFlag>
                    <FlagIcon/>

                </HeaderFlag>

                <HeaderSubscription>
                     <SubscriptionsIcon/>

                </HeaderSubscription>
                <HeaderStore>
                    <StorefrontIcon/>

                </HeaderStore>
                <HeaderSupervised>
                   <SupervisedUserCircleIcon/>

                </HeaderSupervised>
                
            

                 </HeaderCenter>

            <HeaderRight>
                <AvaterIcon>
                    <Avatar src={user.photoURL} />
                        <h4>{user.displayName} </h4>
                    
                     </AvaterIcon>
                   
                          <IconButton>
                        <AddIcon/>
                    </IconButton>
                    <IconButton>
                        <ForumIcon/>
                    </IconButton>
                     <IconButton>
                        <NotificationsActiveIcon/>
                    </IconButton>
                     <IconButton>
                     <ExpandMoreIcon/>
                    </IconButton>

                  

                   
                    

               




            </HeaderRight>
            
        </Container>
    )
}

export default Header

const Container = styled.div`
padding:0 20px;
display:flex;
align-items:center;
justify-content:space-between;
position:sticky;
z-index:100;
background-color:white;
top:0;
box-shadow: 0px 5px 8px -9px rgba(0,0,0,75);
`
const HeaderLeft = styled.div`
display:flex;
`
const FbLogo = styled.div`
            img{
                height:40px;
            }
`


const SearchIconLogo = styled.div`
display:flex;
align-items:center;
background-color:#eff2f5;
padding:10px;
border-radius:999px;

`
const SearchInput = styled.input`
                background-color:transparent;
                border:none;
                outline-width:0;

`
const HeaderCenter = styled.div`
display:flex;
align-items:center;
.MuiSvgIcon-root{
    color:gray;
    display:flex;
    padding:0 30px;
cursor:pointer;
}
.MuiSvgIcon-root:hover{
    color:#2e81f4;
     background-color:#eff2f5;
      border-radius:10px;
      align-items:center; 
      border-bottom:none;
     height:50px;

}

`

const HeaderHome = styled.div`
        
`
const HeaderFlag = styled.div`

`
const HeaderSubscription = styled.div`
                    `
const HeaderStore = styled.div`
                    `
const HeaderSupervised = styled.div`
                    `



const HeaderRight = styled.div`
display:flex;
`
const AvaterIcon = styled.div`
  display:flex;
  align-items:center;
  margin-right:10px;
  h4{
      margin-left:10px;
      
  }

`
