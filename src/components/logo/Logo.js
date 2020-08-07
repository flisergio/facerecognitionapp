import React, { Fragment } from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo_brain from './images/logo_brain.png';

const Logo = () => {
    return(
        <Fragment>
            <div className="div_logo-container ma4 mt0">
                <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                    <div className="Tilt-inner pa3"><img className="logo_brain" src={logo_brain} alt="logo"/></div>
                </Tilt>
            </div>
        </Fragment>
    );
}

export default Logo;