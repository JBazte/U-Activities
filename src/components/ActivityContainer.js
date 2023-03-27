import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'
import ActivityCard from './ActivityCard'
import Button from 'react-bootstrap/Button';

function ActivityContainer() {
    return (
        <div>
            <div className="d-flex text-start">
                <p className="title-text m-0">EVENTS</p>
            </div>
            <hr className='border border-5 border-dark opacity-100 my-2' />
            <div className='row g-0'>
                <div className='col'>
                    <button className='border border-white rounded-start bg-dark w-100 py-4'>
                        <FontAwesomeIcon icon={faCalendarCheck} color='#9DA3A7' size='xl' className='pe-4' />
                        Para ti
                    </button>
                </div>
                <div className='col'>
                    <Button className='border border-white rounded-0 bg-dark w-100 py-4'>
                        <FontAwesomeIcon icon={faCalendarCheck} color='#9DA3A7' size='xl' className='pe-4' />
                        Explorar
                    </Button>
                </div>
                <div className='col'>
                    <Button className='border border-white rounded-0 bg-dark w-100 py-4'>
                        <FontAwesomeIcon icon={faCalendarCheck} color='#9DA3A7' size='xl' className='pe-4' />
                        Favoritos
                    </Button>
                </div>
                <div className='col'>
                    <button className='border border-white rounded-end bg-dark w-100 py-4'>
                        <FontAwesomeIcon icon={faCalendarCheck} color='#9DA3A7' size='xl' className='pe-4' />
                        Mis eventos
                    </button>
                </div>
            </div>
            <div className="mt-2">
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
            </div>
        </div>
    )
}

export default ActivityContainer;