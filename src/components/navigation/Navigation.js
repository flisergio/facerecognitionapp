import React, { Fragment } from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return(
            <nav className="nav_main">
                <p 
                    className="p_sign-out f3 link dim black underline pa3 pointer"
                    onClick={() => onRouteChange("signout")}
                >
                    Sign Out
                </p>
            </nav>
        );
    } else {
        return(
            <nav className="nav_main">
                <p 
                    className="p_sign-out f3 link dim black underline pa3 pointer"
                    onClick={() => onRouteChange("signin")}
                >
                    Sign In
                </p>

                <p 
                    className="p_sign-out f3 link dim black underline pa3 pointer"
                    onClick={() => onRouteChange("register")}
                >
                    Register
                </p>
            </nav>
        );
    }
}

export default Navigation;