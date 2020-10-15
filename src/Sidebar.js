import React from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallIcon from '@material-ui/icons/Call';
import InfoIcon from '@material-ui/icons/Info';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import {useSelector,useDispatch} from "react-redux";
import {selectUser} from './features/userSlice';
import {auth} from './firebase';

function Sidebar() {

    const user = useSelector(selectUser);


    return (
        <div className="sidebar">
            

            <div className="sidebar_top">

                <h3>Cisco System </h3>

                 <ExpandMoreIcon />

            </div>


            <div className="sidebar_channels">

                <div className="sidebar_channelsHeader">

                    <div className="sidebar_header">

                         <ExpandMoreIcon />
                         <h4>Text channels</h4>


                    </div>

                    <AddIcon className="sidebar_addchannel" />
                    

                </div>


                <div className="channels_list">

                        <SidebarChannel />
                        <SidebarChannel />
                        <SidebarChannel />
                        <SidebarChannel />

                </div>



            </div>

            <div className="sidebar_voice">

            <SignalCellularAltIcon 
                
                className="voice_icon"
                fontSize="large"
                
            />

            <div className="voice_info">

                <h3>Voice connected</h3>
                <p>   Stream </p>

            </div>

            <div className="sidebar_voiceIcons">

                <InfoIcon />
                <CallIcon />

            </div>

            </div>

        <div className="sidebar_profile">

            <Avatar onClick={()=>auth.signOut()} src={user?.photo} />

            <div className="sidebar_profileInfo">

                <h3>{user.displayName}</h3>
                <p>#{user.uid.substring(0,5)}</p>

            </div>

            <div className="sidebar_profileIcons">

                <MicIcon />
                <HeadsetIcon />
                <SettingsIcon />


            </div>

    

        </div>
        </div>
    )
}

export default Sidebar
