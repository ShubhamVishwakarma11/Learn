import React, {useState} from 'react';
import useInputState from '../hooks/useInputState';
import GoogleButton from 'react-google-button';
import { Link,useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';
import { useUserAuth } from '../context/UserAuthContext';


function SignUp(props) {

    const [email,handleEmail,resetEmail] = useInputState("");
    const [password,handlePassword,resetPassword] = useInputState("");
    const [cPassword,handleCPassword,resetCPassword] = useInputState("");
    const [error, setError] = useState("");

    const {signUp} = useUserAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        resetEmail();
        resetPassword();
        resetCPassword();
        setError("");
        if(password === cPassword) {
            try{
                await signUp(email,password);
                navigate("/home");
                
            } catch (err) {
                console.log("ERRORRRRRRRR!");
                setError(err.message);
            }
        }
        else {
            alert("Confirm Password should be same as the Password");
        }
    }

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
                    {error && <p>{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <input className='Form-Input' placeholder='Email' value={email} onChange={handleEmail}/>
                        <br/><input className='Form-Input' placeholder='Password' value={password} onChange={handlePassword}/>
                        <br/><input className='Form-Input' placeholder='Confirm Password' value={cPassword} onChange={handleCPassword}/>
                        <button className='Form-Button'> Sign Up</button>
                        <br/>
                        <p className='Login-link'>Already have an account? <Link to="/login" >Login</Link></p>
                    </form>
                </div>
                <br/>
                <div className='Google-button-div'>
                    <GoogleButton 
                        type='dark'
                        label='Sign in with Google'
                        onClick={() => { console.log('Google button clicked') }}  
                    />
                </div>
            </div>
        </div>
    )
}

export default SignUp;