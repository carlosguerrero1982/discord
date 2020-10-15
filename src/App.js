import React from 'react';
import './App.css';
import Chats from './Chats';
import Sidebar from './Sidebar';
import {useSelector} from "react-redux";
import {selectUser} from './features/userSlice';

function App() {

   const user = useSelector(selectUser);
  return (
    <div className="app">

      {
        user ? (
         
          <>
          <Sidebar />

          <Chats />
      </>

        ):(

          <h2>Need to login</h2>

        )
      }

  
    </div>
  );
}

export default App;
