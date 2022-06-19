import React from 'react';
import {useUserAuth} from '../context/UserAuthContext';

function HomePage() {
    const {user} = useUserAuth();
    console.log(user.email);
    return (
        <div>
            <h1> Welcome to the Home Page {user.email}!! </h1>
            <h3> This is a protected route hence you 
                will only be able to access it if you are logged in.</h3>
        </div>
    )
}

export default HomePage;