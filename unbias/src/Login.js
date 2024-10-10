import React from 'react';
import { SignInButton } from '@clerk/clerk-react';
import './Login.css';

function Login() {
    return (
        <div className="login-wrapper">
            <div className="login-content">
                <h1 className='login-welcome'>Welcome to Unbias</h1>
                <p>Getting diverse, expert advice on your most critical decisions has never been simpler</p>
                <div className="login-button">
                    <SignInButton />
                </div>
            </div>
        </div>
    );
}

export default Login;
