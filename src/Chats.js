import React,{useState,useEffect} from 'react';
import ChatHeader from './ChatHeader';
import './Chats.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import {useSelector} from "react-redux";
import {selectChannelId} from "./features/appSlice";
import {selectChannelName} from "./features/appSlice";
import {selectUser} from "./features/userSlice";
import db from './firebase';
import firebase from 'firebase';

function Chats() {

    const channelId = useSelector(selectChannelId);
    const user = useSelector(selectUser);
    const channelName = useSelector(selectChannelName);

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);


    useEffect(() => {

      if(channelId){
        
        db.collection('channels').doc(channelId).collection('messages').
        orderBy("timestamp","desc")
        .onSnapshot((snapshot)=>

            setMessages(snapshot.docs.map((doc) =>doc.data()
                
                ))
        
        )
      }
    }, [channelId])

    const sendMessage = (e) =>{

        e.preventDefault();

        db.collection('channels').doc(channelId).collection('messages').add({

            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user:user,
           

        })

        setInput('');

    }
    
    return (
        <div className="chats">
          

            <ChatHeader channelName={channelName} />

            <div className="chat_messages">

            {
                messages.map((message)=>(

                    <Message 
                    
                    timestamp={message.timestamp}
                    message={message.message}
                    user={message.user}
                    
                    />
                ))


            }

            </div>




            <div className="chat_input">

            <AddCircleIcon fontSize="large" />

            <form>

                <input disabled={!channelId} value ={input} onChange={(e)=> setInput(e.target.value)} placeholder={`Message #${channelName}`} />
                <button onClick={sendMessage} className="chat_inputButton" type="submit">Send Message</button>


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
