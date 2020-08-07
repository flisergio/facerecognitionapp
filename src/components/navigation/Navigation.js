import React, { Fragment } from 'react';
import './Navigation.css';

const Navigation = () => {
    return(
        <Fragment>
            <nav className="nav_main">
                <p className="p_sign-out f3 link dim black underline pa3 pointer">Sign Out</p>
            </nav>
        </Fragment>
    );
}

export default Navigation;