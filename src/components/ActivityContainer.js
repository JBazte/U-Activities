import React from 'react';
import ActivityButton from "./ActivityButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

function ActivityContainer() {
    return (
        <div className="card border border-dark rounded-1 activity-containershadow">
            <div className="row no-gutters">
                <div className="col-sm-3">
                    <img src='https://www.muycomputer.com/wp-content/uploads/2012/07/edificiou-tad.jpg' alt='activity_img' className='img-fluid h-100 w-100 image-cover' />
                </div>
                <div className="col-sm-6">
                    <div className="card-body d-flex text-start flex-column px-2 h-100">
                        <h1 className="card-title">Event name</h1>
                        <p className='text-muted'><small>Date</small></p>
                        <p className="card-text pb-4">Description</p>
                        <h5 className='card-text mt-auto highlight-text'>U-TAD</h5>
                    </div>
                </div>
                <div className="card-block col-sm-3 py-2 d-flex">
                    <div className='mt-auto mx-auto justify-content-center flex-column'>
                        <FontAwesomeIcon icon={faHeart} color="#9DA3A7" />
                        <ActivityButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityContainer;