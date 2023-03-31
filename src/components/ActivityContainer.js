import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'
import ActivityCard from './ActivityCard'

function ActivityContainer() {
    return (
        <>
            <div className="d-flex text-start">
                <p className="title-text blue-highlight-text m-0">EVENTS</p>
            </div>
            <hr className='border border-5 border-dark opacity-100 my-2' />
            <div className='row g-0'>
                <div className='col'>
                    <button className='border border-white rounded-start filter-button w-100 py-4'>
                        <FontAwesomeIcon icon={faCalendarCheck} color='#9DA3A7' size='xl' className='pe-4' />
                        Para ti
                    </button>
                </div>
                <div className='col'>
                    <button className='border border-white rounded-0 filter-button w-100 py-4'>
                        <FontAwesomeIcon icon={faCalendarCheck} color='#9DA3A7' size='xl' className='pe-4' />
                        Explorar
                    </button>
                </div>
                <div className='col'>
                    <button className='border border-white rounded-0 filter-button w-100 py-4'>
                        <FontAwesomeIcon icon={faCalendarCheck} color='#9DA3A7' size='xl' className='pe-4' />
                        Favoritos
                    </button>
                </div>
                <div className='col'>
                    <button className='border border-white rounded-end filter-button w-100 py-4'>
                        <FontAwesomeIcon icon={faCalendarCheck} color='#9DA3A7' size='xl' className='pe-4' />
                        Mis eventos
                    </button>
                </div>
            </div>
            <div className="mt-4">
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
            </div>
        </>
    )
}

export default ActivityContainer;