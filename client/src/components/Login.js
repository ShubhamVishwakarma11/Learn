import React, {useState} from 'react';
import '../styles/Login.css';
import GoogleButton from 'react-google-button';
import {Link, useNavigate} from 'react-router-dom';
import useInputState from '../hooks/useInputState';
import { useUserAuth } from '../context/UserAuthContext';


function Login(props) {

    const [email,handleEmail,resetEmail] = useInputState("");
    const [password,handlePassword,resetPassword] = useInputState("");
    const [error, setError] = useState("");

    const {logIn,googleSignIn} = useUserAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        resetEmail();
        resetPassword();
        // setError("");
        try{
            await logIn(email,password);
            navigate("/home");
        } catch(err) {
            setError(err.message);
        }
    }
    
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try{
            await googleSignIn();
            navigate("/home");
        } catch(err) {
            setError(err.message);
        }
    }

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
                    {error && <p> {error} </p>}
                    <form onSubmit={handleSubmit}>
                        <input className='Form-Input' placeholder='Email' value={email} onChange={handleEmail}/>
                        <br/><input className='Form-Input' placeholder='Password' value={password} onChange={handlePassword}/>
                        <button className='Form-Button'> Login</button>
                        <br/>
                        <p className='Login-link'>Don't have an account? <Link to="/signup" >Signup here</Link></p>
                    </form>
                </div>
                {/* <br/>    */}
                <div className='Google-button-div'>
                    <GoogleButton 
                        type='dark'
                        label='Log in with Google'
                        onClick={handleGoogleSignIn}  
                    />
                </div>
            </div>
        </div>
    )
}

export default Login;