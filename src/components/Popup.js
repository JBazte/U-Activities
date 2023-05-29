import React, { useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function Popup({ content, handleAccept, handleDecline }) {
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if ((popupRef.current && !popupRef.current.contains(event.target)) || event.target.className === 'popup-overlay') {
                if (event.target.className !== 'dropdown-item' && event.target.className !== 'nav-link' && event.target.type !== 'button') {
                    handleDecline();
                }
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleDecline]);

    const handleAcceptClick = () => {
        handleAccept();
    };

    return (
        <div className="popup-overlay" ref={popupRef}>
            <div className="popup-content">
                <p>{content}</p>
                <div className="popup-buttons">
                    <Button variant="btn btn-dark px-5 rounded-pill" onClick={handleAcceptClick}>
                        Si
                    </Button>
                    <Button className='btn btn-light px-5 rounded-pill' onClick={handleDecline}>
                        No
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Popup;
