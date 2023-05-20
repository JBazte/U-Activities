import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

function NotificationCard() {
    const [expandedBox, setExpandedBox] = useState(null);

    const handleBoxClick = (boxId) => {
        if (expandedBox === boxId) {
            setExpandedBox(null);
        } else {
            setExpandedBox(boxId);
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-10">
                    <div className="card border border-0 rounded-1 activity-container-shadow mb-3">
                        <div className="row no-gutters p-3">
                            <div className="col-notification-card-image-custom">
                                <img
                                    src="https://apiimg.iberostar.com/uploads/image/47658/crops/1200:310/1200/image.jpeg"
                                    alt="activity_img"
                                    className="d-block w-100 h-100 image-cover card-image rounded-circle"
                                />
                            </div>
                            <div className="col-notification-body-custom px-0">
                                <div className="card-body h-100 d-flex align-items-center">
                                    <h5 className="card-title">¡Alberto quiere conectar contigo!</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`col-1 px-1 mb-3 ${expandedBox ? 'd-none' : ''}`}
                    onClick={() => handleBoxClick('accept')}
                >
                    <Button className="h-100 w-100 d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
                    </Button>
                </div>
                <div
                    className={`col-1 px-1 mb-3 ${expandedBox ? 'd-none' : ''}`}
                    onClick={() => handleBoxClick('cancel')}
                >
                    <Button className="card border h-100 w-100 border-0 rounded-1 activity-container-shadow d-flex align-items-center justify-content-center btn-light">
                        <FontAwesomeIcon icon={faCircleXmark} size="2xl" color="#0065EF" />
                    </Button>
                </div>
                {expandedBox === 'accept' && (
                    <div className="col-2 px-1 mb-3 d-flex align-items-center justify-content-center">
                        <div className="card border h-100 w-100 border-0 rounded-1 activity-container-shadow bg-button-blue text-center d-flex flex-column justify-content-center">
                            <p className="m-0 text-light">Ahora sois amigos</p>
                        </div>
                    </div>
                )}
                {expandedBox === 'cancel' && (
                    <div className="col-2 px-1 mb-3 d-flex align-items-center justify-content-center">
                        <div className="card border h-100 w-100 border-0 rounded-1 activity-container-shadow text-center d-flex flex-column justify-content-center">
                            <p className="m-0 fw-bold">Solicitud Cancelada</p>
                        </div>
                    </div>
                )}
            </div >
        </>
    );
}

export default NotificationCard;
