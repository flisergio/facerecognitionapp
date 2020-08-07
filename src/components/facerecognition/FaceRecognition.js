import React, { Fragment } from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return(
        <Fragment>
            <div className="div_facerecognition-container center ma">
                <div className="div_main-img-container absolute mt2">
                    <img id="img_main" className="img_main" src={imageUrl} alt="" />
                    <div 
                        className="div_bounding-box" 
                        style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default FaceRecognition;