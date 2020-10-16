import React from 'react';
import './ChatHeader.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

function ChatHeader({channelName}) {
    return (
        <div className="chatheader">
            

            <div className="chatheader_left">

                <h3>
                    <span className="chatheader_hash"> # </span>
                    
                    {channelName}
                </h3>

            </div>

            <div className="chatheader_right">

                <NotificationsIcon />
                <EditLocationIcon />
                <PeopleAltIcon />

                <div className="chatheader_search">

                    <input type="text" placeholder="Search" />

                    <SearchRoundedIcon />

                </div>

                <SendRoundedIcon />
                <HelpRoundedIcon />

            </div>
        </div>
    )
}

export default ChatHeader
