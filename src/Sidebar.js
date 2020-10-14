import React from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';


function Sidebar() {
    return (
        <div className="sidebar">
            <h1>Sidebar</h1>

            <div className="sidebar_top">

                <h3>CLebe</h3>

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

            
        </div>
    )
}

export default Sidebar
