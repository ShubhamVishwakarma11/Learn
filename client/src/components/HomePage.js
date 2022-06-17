import React from 'react';

function HomePage() {
    return (
        <div>
            <h1> Welcome to the Home Page!! </h1>
            <h3> This is a protected route hence you 
                will only be able to access it if you are logged in.</h3>
        </div>
    )
}

export default HomePage;