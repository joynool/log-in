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
                    <img src={bg} alt="abc" width={'auto'} height={'660'} />
                </div>
                <div className='right-side'>
                    <div className='login-panel'>
                        <img src={logo} alt="logo" className='login-logo' />
                        <h2 className='login-text text-center'>Explore new courses... Hurry up!!</h2>
                        <form action="" className='login-form'>
                            <input className='login-input' type="email" name="" id="" placeholder='Email Address' required />
                            <input className='login-input' type="password" name="" id="" placeholder='Password' required />
                            <button className='btn forget-button'>Forget Password?</button>
                            <input type="submit" value="LOG IN" className='submit-button' />
                        </form>
                        <div className='text-center form-divider line'>or</div>
                        <div className='social-icon'>
                            <button className='btn mr'>
                                <FaFacebook className='facebook-icon' />
                            </button>
                            <button className='btn'>
                                <FcGoogle className='google-icon' />
                            </button>
                        </div>
                        <div className='text-center signup'>
                            Don't have an account?
                            <button className='btn signup-button'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login
