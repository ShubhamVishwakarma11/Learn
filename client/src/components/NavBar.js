import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';
import {useUserAuth} from '../context/UserAuthContext';
import { async } from '@firebase/util';

function NavBar(props) {
    const {logOut,user} = useUserAuth();
    const navigate = useNavigate();

    const navigateToSignup = () => {
        navigate("/signup");
    };
    const navigateToLogin = () => {
        navigate("/login");
    }

    const navigateToHomePage = () => {
        navigate("/home");
    }

    const handleLogout = async () => {
        try{
            await logOut();
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };
    
    return (
        <div className="NavBar">
            <div className='NavBar-Logo'>
                <a><h1 onClick={navigateToHomePage}> Learn </h1></a>
            </div>
            <div className='NavBar-Menu'>
                <a className='NavBar-Link active' onClick={navigateToHomePage}> Home </a>
                <a className='NavBar-Link' > Explore </a> 
                <a className='NavBar-Link' > Teach</a>
                { user ?
                <a className='NavBar-Link' onClick={handleLogout}> Logout</a>
                :
                <>
                <a className='NavBar-Link' onClick={navigateToSignup}> Signup</a>
                <a className='NavBar-Link' onClick={navigateToLogin}> Login</a>
                </>
                }
            </div>
        </div>
    )
}

export default NavBar;