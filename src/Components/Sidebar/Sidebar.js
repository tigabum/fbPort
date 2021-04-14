import React from 'react'
import styled from 'styled-components';
import SidebarItem from '../SidebarItem/SidebarItem'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import{ ExpandMoreOutlined} from '@material-ui/icons';
function Sidebar() {
    return (
        <SidebarContainer>
           <SidebarItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVcxk0DAgRfd1aMkSWE17aW5u9XpqVtchk_Q&usqp=CAU"  name="some name"
            title="Lewi Isamel"
           />
            <SidebarItem
                Icon = {LocalHospitalIcon}
                title="COVID-19 Information"
           />
            <SidebarItem
              Icon={EmojiFlagsIcon}
                title="Pages"
           />

            <SidebarItem
                Icon={PeopleIcon}
               title="Friends"
           />
            <SidebarItem
               Icon={ChatIcon}
                title="Messenger"
           />
            <SidebarItem
                Icon={StorefrontIcon}
                title="Marketplacce"
           />
            <SidebarItem
                Icon={VideoLibraryIcon}
                title="Videos"
           />
            <SidebarItem
                Icon={ExpandMoreOutlined}
                title="Marketplacce"
           />
            
            
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
padding:25px 10px;
flex:0.33;

`