import React from 'react';
import '../styles/Login.css';
import GoogleButton from 'react-google-button';
import {Link} from 'react-router-dom';


function Login(props) {
    return (
        <div className='Login'>
            <div className='Login-Branding'>
                <p className='branding-text'> The  </p>
                <p className='branding-text'> One Place </p>
                <p className='branding-text'> Destination</p>
                <p className='branding-text'> for <span className='learn'>Learn</span>ing </p>
                <p className='branding-text'> Skills </p>
                
            </div>
            <div className='Login-Form'>
                <h1 className='Logintext'> Log In</h1>
                <div className='Form-Header'>
                    <div className='Header-Student active'>
                        <p> Login as a Student</p>
                    </div>
                    <div className='Header-Teacher'>
                        <p> Login as a Teacher</p>
                    </div>
                </div>

                <div className='Form'>
                    <form>
                        <input className='Form-Input' placeholder='Username'/>
                        <br/><input className='Form-Input' placeholder='Password'/>
                        <button className='Form-Button'> Sign Up</button>
                        <br/>
                        <p className='Login-link'>Don't have an account? <Link to="/signup" >Signup here</Link></p>
                    </form>
                </div>
                <br/>
                <div className='Google-button-div'>
                    <GoogleButton 
                        type='dark'
                        label='Log in with Google'
                        onClick={() => { console.log('Google button clicked') }}  
                    />
                </div>
            </div>
        </div>
    )
}

export default Login;