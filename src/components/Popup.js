import React from 'react';
import Button from './Button';

const Popup = ({content, handleClose}) => {
    return  (
        <div className='popup'>
            <div className="popup-inner">
                <Button className="cancel" text="Cancel" onClick={handleClose}></Button>
                {content}
            </div>
        </div>
    )
}

export default Popup