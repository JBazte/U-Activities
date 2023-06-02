import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarXmark } from '@fortawesome/free-regular-svg-icons'
import { Button } from 'react-bootstrap';

function ActivityDetails({data}) {
    const { name,category, description  } = data;
    console.log(data);
    return (
        <>
            <div className="bg-white shadow rounded overflow-hidden">
                <div className="p-0 position-relative" style={{ height: "17rem" }}>
                    <img src='https://apiimg.iberostar.com/uploads/image/47658/crops/1200:310/1200/image.jpeg' alt='activity_img' className='w-100 h-100 image-cover' />
                    <div className='w-100 h-100 activity-detail-gradient'></div>
                    <div className='pt-3 ms-5 w-25 position-absolute top-0'>
                        <div className='d-flex'>
                            <p className='activity-detail-type-text text-white'><small>{name}</small></p>
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
                            <p className='text-white bg-opacity-75 rounded-5 activity-detail-tags bg-button-blue'><small>{category}</small></p>
                        </li>
                    </ul>
                </div>

                <div className='px-5'>
                    <h1 className="mb-0 activity-detail-title">{name}</h1>
                    <h5 className='mt-auto activity-detail-subtitle'>{description.split('.')[0]+'.'}</h5>
                    <p className='ms-2 mb-2 activity-detail-schedule'><FontAwesomeIcon icon={faCalendarXmark} color='#6F7276' transform="grow-1" className='me-2' /> Lunes 23-10-23</p>
                    <p className='ms-2 mb-2 activity-detail-schedule'><FontAwesomeIcon icon={faCalendarXmark} color='#6F7276' transform="grow-1" className='me-2' /> 19:00-20:00</p>
                    <p className="mt-3 mb-3 activity-detail-body w-100">
                    {description}
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