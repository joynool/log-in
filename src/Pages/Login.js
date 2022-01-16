import React from 'react'
import './Login.css'
import bg from './../images/bg.png'
import logo from './../images/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Login ()
{
    return (
        <main className='wrapper'>
            <div className='container'>
                <div className='left-side'>
                    <img src={bg} alt="abc" width={'auto'} height={'auto'} />
                </div>
                <div className='right-side'>
                    <div className='login-panel'>
                        <img src={logo} alt="logo" />
                        <h2>Explore new courses... Hurry up!!</h2>
                        <form action="" className='login-form'>
                            <input className='login-input' type="email" name="" id="" placeholder='Email Address' />
                            <input className='login-input' type="password" name="" id="" placeholder='Password' />
                            <button className='forget-button'>Forget Password?</button>
                            <input type="submit" value="LOG IN" className='submit-button' />
                        </form>
                        <div className='form-divider line'>or</div>
                        <div className='social-icon'>
                            <FaFacebook className='facebook-icon' />
                            <FcGoogle className='google-icon' />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login
