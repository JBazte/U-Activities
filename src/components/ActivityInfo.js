import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCalendarXmark, faClock, faMap } from '@fortawesome/free-regular-svg-icons'
import { faUserGroup, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import Popup from './Popup';

function ActivityInfo({ data }) {
    const { name, location, start_date, end_date } = data;
    const [showPopup, setShowPopup] = useState(false);

    const handleLogoutClick = () => {
        setShowPopup(true);
    };

    const handleAcceptPopup = () => {
        setShowPopup(false);
    };

    const handleDeclinePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <h1 className='activity-detail-type-text'>Información del evento</h1>
            <div className='bg-white shadow rounded overflow-hidden my-3' style={{ height: "18.5rem" }}>
                <div className='d-flex flex-column h-100'>
                    <div className='mx-4 my-3'>

                        <p>
                            <FontAwesomeIcon icon={faCalendarXmark} transform='grow-5' className='me-2' />
                            <b>Fecha</b> del Evento y Horario
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faClock} transform='grow-5' className='me-2' />
                            <b>X</b> Días Para Inscribirse
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faMap} transform='grow-5' className='me-2' />
                            <b>Ubicación</b>
                        </p>
                        <p className='mb-4'>
                            <FontAwesomeIcon icon={faUserGroup} transform='grow-5' className='me-2' />
                            <b>Participantes XX/XX</b>
                        </p>
                        <div className='mt-auto'>
                            <Button className='w-100 rounded-1 my-1' style={{ backgroundColor: 'var(--light-grey)', border: 'none' }}>Guardar en favoritos <FontAwesomeIcon icon={faHeart} transform='grow-1' className='ms-2' /></Button>
                            <Button className='w-100 rounded-1 my-1 bg-button-blue' onClick={handleLogoutClick} style={{ backgroundColor: 'var(--light-grey)', border: 'none' }}>Inscribirse a la actividad </Button>
                            <Button className='d-none w-100 rounded-1 my-1' onClick={handleLogoutClick} style={{ backgroundColor: 'var(--red)', border: 'none' }}>Darse de baja de la actividad </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white shadow rounded overflow-hidden my-4'>
                <div className='mx-4 my-3 d-flex flex-column align-items-center text-center'>
                    <p>Hay <b>X personas</b> inscritas a este evento</p>
                    <div className='d-flex position-relative' style={{ left: "-30px" }}>
                        <img src='' alt='' height='130px' width='130px' className='bg-dark bg-opacity-50 rounded-circle border border-white border-5 img-cover' />
                        <div className='bg-dark bg-opacity-25 rounded-circle border border-white border-5 d-flex align-items-center justify-content-center position-absolute top-0 start-100 translate-middle-x' style={{ height: "130px", width: "130px" }}>
                            <p className='m-0'>X más...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white shadow rounded overflow-hidden my-4'>
                <div className='mx-4 my-3 d-flex flex-column align-items-center text-center'>
                    <p>Otros eventos de este Organizador...</p>
                    <div className='d-flex'>
                        <div className='d-block me-3'>
                            <div className='bg-dark bg-opacity-50 rounded-4 border border-white border-5' style={{ height: "130px", width: "130px" }} />
                            <p className='m-0'><b>Nombre de el<br></br>evento</b></p>
                        </div>
                        <div className='d-block me-3'>
                            <div className='bg-dark bg-opacity-50 rounded-4 border border-white border-5' style={{ height: "130px", width: "130px" }} />
                            <p className='m-0'><b>Nombre de el<br></br>evento</b></p>
                        </div>
                        <div className='d-block align-self-center mb-5'>
                            <p className='m-0'>MÁS...</p>
                            <FontAwesomeIcon icon={faArrowRight} transform='grow-5' />
                        </div>
                    </div>
                </div>
                {showPopup && (
                    <Popup content="¿Seguro que quieres inscribirte en la actividad?" handleAccept={handleAcceptPopup} handleDecline={handleDeclinePopup} />
                )}
            </div>
        </>
    )
}

export default ActivityInfo;