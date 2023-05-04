import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Button } from 'react-bootstrap';

function ActivityInfo() {
    return (
        <>
            <h1 className='activity-detail-type-text'>Información del evento</h1>
            <div className='bg-white shadow rounded overflow-hidden my-3' style={{ height: "18.5rem" }}>
                <div className='d-flex flex-column h-100'>
                    <div className='mx-4 my-3'>
                        <p><b>Fecha</b> del Evento y Horario</p>
                        <p><b>X</b> Días para inscribirse</p>
                        <p className='mb-5'><b>Ubicación</b></p>
                        <div className='mt-auto'>
                            <Button className='w-100 rounded-1 my-1' style={{ backgroundColor: 'var(--light-grey)', border: 'none' }}>Guardar en favoritos <FontAwesomeIcon icon={faHeart} transform='grow-1' className='ms-2' /></Button>
                            <Button className='w-100 rounded-1 my-1 bg-button-blue' style={{ backgroundColor: 'var(--light-grey)', border: 'none' }}>Inscribirse a la actividad </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white shadow rounded overflow-hidden my-4'>
                <div className='mx-4 my-3 d-flex flex-column align-items-center'>
                    <p>Hay <b>X personas</b> inscritas a este evento</p>
                    <div className='d-flex position-relative'>
                        <img src='' alt='' height='130px' width='130px' className='bg-dark bg-opacity-50 rounded-circle border border-white border-5 img-cover' />
                        <div className='bg-dark bg-opacity-25 rounded-circle border border-white border-5 d-flex align-items-center justify-content-center position-absolute top-0 start-100 translate-middle-x' style={{ height: "130px", width: "130px" }}>
                            <p className='m-0'>X más...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivityInfo;