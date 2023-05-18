import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

function ActivityDetails() {
    return (
        <>
            <div className="bg-white shadow rounded overflow-hidden">
                <div className="p-0 position-relative bg-secondary" style={{ height: "17rem" }}>
                    <label for="img-upload" class="text-dark w-100 h-100 d-flex justify-content-center align-items-center">
                        <b>Foto de cabecera</b>
                        <FontAwesomeIcon icon={faCamera} transform='grow-10' className='ms-3' />
                    </label>
                    <input type="file" id="img-upload" accept="image/png, image/jpeg" className='d-none' />
                    <div className="px-5 pb-4 media align-items-end position-absolute top-100 start-0 translate-middle-y">
                        <div className="profile mt-4 me-3 mb-2 border border-white border-5 rounded-3 bg-secondary">
                            <label for="profile-upload" class="text-dark py-4 px-2 d-flex flex-column justify-content-center">
                                <FontAwesomeIcon icon={faCamera} transform='grow-7' className='' /> <br />
                                <b>Foto de perfil</b>
                            </label>
                            <input type="file" id="profile-upload" accept="image/png, image/jpeg" className="d-none"></input>
                        </div>
                    </div>
                </div>

                <div className="p-4 d-flex justify-content-end text-center">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                            <p className='d-none text-white bg-opacity-75 rounded-5 activity-detail-tags'><small>Fines de semana</small></p>
                        </li>
                        <li className="list-inline-item pe-5 ps-3">
                            <p className='d-none text-white bg-opacity-75 rounded-5 activity-detail-tags bg-button-blue'><small>Categoría</small></p>
                        </li>
                    </ul>
                </div>

                <div className='px-5'>
                    <input type="text" className="mb-2 activity-detail-title" placeholder='Nombre del Evento' /> <br />
                    <textarea rows={4} className='mb-2 activity-detail-subtitle w-100' placeholder="Descripcion breve" />
                    <label for="fecha">Día</label>
                    <input type="date" id="fecha" className='ms-2 mb-2 activity-detail-schedule' /> <br />
                    <label for="horario">Horario</label>
                    <input type="time" id="horario" className='ms-2 mb-2 activity-detail-schedule' />
                    <input type="time" className='ms-2 mb-2 activity-detail-schedule' />
                    <textarea rows={7} className="mt-3 mb-3 activity-detail-body w-100" />
                </div>
            </div>
        </>
    )
}

export default ActivityDetails;