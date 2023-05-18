import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarXmark, faClock, faMap } from '@fortawesome/free-regular-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';

function ActivityInfo() {
    return (
        <>
            <h1 className='activity-detail-type-text'>Información del evento</h1>
            <div className='bg-white shadow rounded overflow-hidden my-3' style={{ height: "18.5rem" }}>
                <div className='d-flex flex-column h-100'>
                    <div className='mx-4 my-3'>

                        <p className='d-flex'>
                            <FontAwesomeIcon icon={faCalendarXmark} transform='grow-5' className='my-1 me-2' />
                            <input type="text" className="mb-2 w-100" placeholder='Fecha del Evento y Horario' /> <br />
                        </p>
                        <p className='d-flex'>
                            <FontAwesomeIcon icon={faClock} transform='grow-5' className='my-1 me-2' />
                            <input type="number" min={1} className="mb-2 w-100" placeholder='Días Para Inscribirse' /> <br />
                        </p>
                        <p className='d-flex'>
                            <FontAwesomeIcon icon={faMap} transform='grow-5' className='my-1 me-2' />
                            <input type="text" className="mb-2 w-100" placeholder='Ubicación' /> <br />
                        </p>
                        <p className='d-flex'>
                            <FontAwesomeIcon icon={faUserGroup} transform='grow-5' className='my-1 me-2' />
                            <label for="maxParticipantes" className='text-dark'>Participantes: </label>
                            <input type="number" min={1} className="mb-2 ms-auto me-2" placeholder='Min' style={{ width: "5rem" }} />
                            <input id="maxParticipantes" type="number" min={1} className="mb-2" placeholder='Max' style={{ width: "5rem" }} />
                        </p>
                        <div className='mt-auto'>
                            <Button className='w-100 rounded-1 my-1 bg-button-blue' style={{ backgroundColor: 'var(--light-grey)', border: 'none' }}>Publicar actividad</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivityInfo;