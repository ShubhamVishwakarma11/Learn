import React from 'react';
import '../styles/NavBar.css'

function NavBar(props) {
    return (
        <div className="NavBar">
            <div className='NavBar-Logo'>
                <h1> Learn </h1>
            </div>
            <div className='NavBar-Menu'>
                <a className='NavBar-Link active' href="/"> Home </a>
                <a className='NavBar-Link' href="/"> Explore </a> 
                <a className='NavBar-Link' href="/"> Teach</a>
                <a className='NavBar-Link' href="/"> Signup</a>
                <a className='NavBar-Link' href="/"> Login</a>
            </div>
        </div>
    )
}

export default NavBar;