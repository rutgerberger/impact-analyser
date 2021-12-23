import React from 'react';
import Button from './Button';
import './css/popup.css'

const Popup = ({content, handleClose}) => {
    return  (
        <div className='popup'>
            <div className="popup-inner">
                {content}
            </div>
        </div>
    )
}

export default Popup