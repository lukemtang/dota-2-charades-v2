import React from "react";
import FierySoul from './images/Fiery Soul icon.png';

function PictureDisp() {

    return (
        <div className="PictureContainer">
            <img src={FierySoul} height={ 128} width= {128}></img>
        </div>
        
        /*
        <div className="PictureContainer">
            <img src={require('./images/Fiery Soul icon.png').default} height={ 128} width= {128} />
        </div>
        */
    );
}

export default PictureDisp;