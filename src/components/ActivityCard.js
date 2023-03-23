import React from 'react';
import ActivityButton from "./ActivityButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

function ActivityCard() {
    return (
        <div className="card border border-dark rounded-1 activity-containershadow mb-3">
            <div className="row no-gutters">
                <div className="col-sm-3">
                    <img src='https://apiimg.iberostar.com/uploads/image/47658/crops/1200:310/1200/image.jpeg' alt='activity_img' className='d-block float-right w-100 h-100 image-cover' />
                    <div className='card-img-overlay pt-2 ms-1 '>
                        <div className='d-flex'>
                            <p className='text-white bg-white bg-opacity-25 rounded-3 px-3 card-categody-text'><small>Category</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card-body d-flex text-start flex-column px-2 h-100">
                        <h1 className="card-title card-title-text">Event name</h1>
                        <p className='text-muted card-date-text'>Date</p>
                        <p className="card-text pb-4 body-text">Description</p>
                        <h5 className='card-text mt-auto blue-highlight-text body-text'>Company name</h5>
                    </div>
                </div>
                <div className="card-block col-sm-3 py-2 d-flex flex-column">
                    <div className='me-3'>
                        <Button className='bg-white border-white float-end'><FontAwesomeIcon icon={faTrash} color='#9DA3A7' size='xl' /></Button>

                        <Button className='bg-white border-white float-end'><FontAwesomeIcon icon={faHeart} color='#9DA3A7' size='xl' /></Button>
                    </div>
                    <div className='mt-auto ms-auto me-3'>
                        <ActivityButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard;