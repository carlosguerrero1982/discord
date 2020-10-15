import React,{useEffect} from 'react';
import './App.css';
import Chats from './Chats';
import Sidebar from './Sidebar';
import {useSelector,useDispatch} from "react-redux";
import {selectUser} from './features/userSlice';
import Login from './Login';
import {auth} from './firebase';

function App() {

   const user = useSelector(selectUser);
   const dispatch = useDispatch();

   useEffect(() => {
     
    auth.onAuthStateChanged((authUser => {

        console.log("user is",authUser);
        if (authUser){


        }else {


        }


    }))
    
   }, [])



  return (
    <div className="app">

      {
        user ? (
         
          <>
          <Sidebar />

          <Chats />
      </>

        ):(

          < Login />

        )
      }

  
    </div>
  );
}

export default App;
