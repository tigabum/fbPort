import React from 'react'
import styled from 'styled-components';
import {Avatar} from '@material-ui/core'

function SidebarItem({ src, title, Icon} ) {
    return (
        <ItemContainer>
           {src && <Avatar src={src}/>}
           {Icon && <Icon/>}
           <h4>{title} </h4>
        
        </ItemContainer>
    )
}

export default SidebarItem

const ItemContainer = styled.div`
display:flex;
align-items:center;
margin-left:5px;
line-height:5px;

cursor:pointer;
:hover{
    background-color:lightgray;
    border-radius:10px;
}
h4{
    margin-left:5px;
    font-weight:400px;
    
}
.MuiSvgIcon-root{
    color:#2e81f4;
    font-size:xx-large;
}


`
const Item = styled.div`
`
