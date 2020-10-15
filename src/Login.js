import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core';
import {auth,provider} from './firebase';

function Login() {


    const signin = e => {

        e.preventDefault();

        auth.signInWithPopup(provider)
        .catch((error)=> alert(error.message));

    }


    return (
        <div className="login">

            
            <div className="login_logo">

                <img src="https://logovtor.com/wp-content/uploads/2020/07/discord-logo-vector.png" alt="" />


            </div>

            <Button onClick={signin}>SIGN IN</Button>
            
        </div>
    )
}

export default Login
