import React from 'react';
import ChatHeader from './ChatHeader';
import './Chats.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';

function Chats() {
    return (
        <div className="chats">
          

            <ChatHeader />

            <div className="chat_messages">

            <Message />
            <Message />
            <Message />
            <Message />

            </div>




            <div className="chat_input">

            <AddCircleIcon fontSize="large" />

            <form>

                <input placeholder={'Message #TESTCHANNEL'} />
                <button className="chat_inputButton" type="submit">Send Message</button>


            </form>

            <div className="chat_inputIcons">

                <CardGiftcardIcon />
                <GifIcon />
                <EmojiEmotionsIcon />

            </div>

            </div>
            
        </div>
    )
}

export default Chats
