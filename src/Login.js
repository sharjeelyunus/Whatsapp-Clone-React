import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';

function Login() {
    const signIn = () => {

    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" />
                <div className="login__text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button type="submit" onClick={signIn}>Sign in With Google</Button>
            </div>
        </div>
    )
}

export default Login;
