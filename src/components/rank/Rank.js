import React, { Fragment } from 'react';
import './Rank.css';

const Rank = ({name, entries}) => {
    return(
        <Fragment>
            <div className="div_rank-container">
                <div className="white f3">
                    {`${name}, your current image count is . . .`}
                    <div className='white f1 '>
                        {entries}
                    </div>
                </div>

                <div className="white f1">
                    {}
                </div>
            </div>
        </Fragment>
    );
}

export default Rank;