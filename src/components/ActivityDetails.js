import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarXmark } from '@fortawesome/free-regular-svg-icons'
import { Button } from 'react-bootstrap';

function ActivityDetails() {
    return (
        <>
            <div className="bg-white shadow rounded overflow-hidden">
                <div className="p-0 position-relative" style={{ height: "17rem" }}>
                    <img src='https://apiimg.iberostar.com/uploads/image/47658/crops/1200:310/1200/image.jpeg' alt='activity_img' className='w-100 h-100 image-cover' />
                    <div className='w-100 h-100 activity-detail-gradient'></div>
                    <div className='pt-3 ms-5 w-25 position-absolute top-0'>
                        <div className='d-flex'>
                            <p className='activity-detail-type-text text-white'><small>TIPO DE EVENTO</small></p>
                        </div>
                    </div>
                    <div className="px-5 pb-4 media align-items-end position-absolute top-100 start-0 translate-middle-y">
                        <div className="profile mt-4 me-3 mb-2 border border-white border-5 rounded-3">
                            <img src="https://apiimg.iberostar.com/uploads/image/47658/crops/1200:310/1200/image.jpeg" alt="..." height="130" width="130" className="rounded-3 full-width image-cover" />
                        </div>
                    </div>
                </div>

                <div className="p-4 d-flex justify-content-end text-center">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                            <p className='text-white bg-opacity-75 rounded-5 activity-detail-tags'><small>Fines de semana</small></p>
                        </li>
                        <li className="list-inline-item pe-5 ps-3">
                            <p className='text-white bg-opacity-75 rounded-5 activity-detail-tags bg-button-blue'><small>Categoría</small></p>
                        </li>
                    </ul>
                </div>

                <div className='px-5'>
                    <h1 className="mb-0 activity-detail-title">Nombre del Evento</h1>
                    <h5 className='mt-auto activity-detail-subtitle'>Descripcion breve del evento</h5>
                    <p className='ms-2 mb-2 activity-detail-schedule'><FontAwesomeIcon icon={faCalendarXmark} color='#6F7276' transform="grow-1" className='me-2' /> Lunes 23-10-23</p>
                    <p className='ms-2 mb-2 activity-detail-schedule'><FontAwesomeIcon icon={faCalendarXmark} color='#6F7276' transform="grow-1" className='me-2' /> 19:00-20:00</p>
                    <p className="mt-3 mb-3 activity-detail-body w-100">
                        Descripcion breve Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        <br />
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                    <div className='d-flex justify-content-end mb-4'>
                        <Button className='activity-detail-button px-4 rounded-1' style={{ backgroundColor: "var(--light-grey)", border: "none" }}>Contacta con el organizador</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivityDetails;