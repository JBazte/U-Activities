import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ActivityCard from './ActivityCard'

function ActivityContainer() {
    return (
        <>
            <div className="d-flex text-start">
                <p className="title-text m-0">EVENTOS</p>
            </div>
            <hr className='border border-5 border-dark opacity-100 my-2' />
            <div className='row g-0'>
                <div className='col'>
                    <button className='border border-white rounded-start filter-button w-100 py-2'>
                        <FontAwesomeIcon icon={faUser} color='#9DA3A7' transform="grow-5" className='pe-4' />
                        Para ti
                    </button>
                </div>
                <div className='col'>
                    <button className='border border-white rounded-0 filter-button w-100 py-2'>
                        <FontAwesomeIcon icon={faSearch} color='#9DA3A7' transform="grow-5" className='pe-4' />
                        Explorar
                    </button>
                </div>
                <div className='col'>
                    <button className='border border-white rounded-0 filter-button w-100 py-2'>
                        <FontAwesomeIcon icon={faHeart} color='#9DA3A7' transform="grow-5" className='pe-4' />
                        Favoritos
                    </button>
                </div>
                <div className='col'>
                    <button className='border border-white rounded-end filter-button w-100 py-2'>
                        <FontAwesomeIcon icon={faCalendarCheck} color='#9DA3A7' transform="grow-5" className='pe-4' />
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