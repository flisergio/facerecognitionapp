import React, { Fragment } from 'react';
import './Rank.css';

const Rank = () => {
    return(
        <Fragment>
            <div className="div_rank-container">
                <div className="white f3">
                    {"Sergio, your current rank is . . ."}
                </div>

                <div className="white f1">
                    {"#5"}
                </div>
            </div>
        </Fragment>
    );
}

export default Rank;