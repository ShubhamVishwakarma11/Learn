import React from 'react';
import '../styles/SignUp.css';


function SignUp(props) {
    return (
        <div className='Signup'>
            <div className='Signup-Branding'>
                <p className='branding-text'> The  </p>
                <p className='branding-text'> One Place </p>
                <p className='branding-text'> Destination</p>
                <p className='branding-text'> for <span className='learn'>Learn</span>ing </p>
                <p className='branding-text'> Skills </p>
                
            </div>
            <div className='Signup-Form'>
                <h1 className='signuptext'> Sign Up</h1>
                <div className='Form-Header'>
                    <div className='Header-Student active'>
                        <p> Sign up as a Student</p>
                    </div>
                    <div className='Header-Teacher'>
                        <p> Sign up as a Teacher</p>
                    </div>
                </div>

                <div className='Form'>
                    <form>
                        <input className='Form-Input' placeholder='Username'/>
                        <br/><input className='Form-Input' placeholder='Email'/>
                        <br/><input className='Form-Input' placeholder='Password'/>
                        <br/><input className='Form-Input' placeholder='Confirm Password'/>
                        <button className='Form-Button'> Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;