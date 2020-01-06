import React from 'react';
import './infobar.css';
import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'
const infobar = ({ room }) =>
{
    return (
        <div className="infobar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" alt="online" src={onlineIcon}/>
                <h3>{ room }</h3>           
            </div>
            <div className="rightInnerContainer">
                <a href="/">
                    <img src={closeIcon} alt="leave chat"/>
                </a>
            </div>
        </div>
    )
}

export default infobar;