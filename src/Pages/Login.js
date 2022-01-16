import React from 'react'
import './Login.css'
import bg from './../images/bg.png'
import logo from './../images/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Login ()
{
    return (
        <div className='container'>
            <div className='background'>
                <img src={bg} alt="abc" />
            </div>
            <div>
                <div className='login-panel'>
                    <h2>hello from login</h2>
                    <img src={logo} alt="logo" />
                    <FaFacebook className='facebook-icon' />
                    <FcGoogle className='google-icon' />
                </div>
            </div>
        </div>
    )
}

export default Login
