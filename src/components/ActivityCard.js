import React from 'react';
import ActivityButton from "./ActivityButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

function ActivityCard() {
    return (
        <div className="card border border-dark rounded-1 activity-container-shadow mb-3">
            <div className="row no-gutters">
                <div className="col-card-image-custom">
                    <img src='https://apiimg.iberostar.com/uploads/image/47658/crops/1200:310/1200/image.jpeg' alt='activity_img' className='d-block float-right w-100 h-100 image-cover card-image' />
                    <div className='card-img-overlay pt-2 ms-1 w-25 '>
                        <div className='d-flex'>
                            <p className='bg-white bg-opacity-75 rounded-5 card-category-style'><small>Categoría</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm pe-0">
                    <div className="card-body d-flex text-start flex-column px-2 h-100">
                        <h1 className="card-title card-title-text mb-0">Nombre del Evento</h1>
                        <p className='text-muted mb-2 card-date-text'>Lunes 23-10-23</p>
                        <p className="card-text mb-3 body-text card-body-text">Descripcion breve Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                        <h5 className='card-text mt-auto blue-highlight-text card-business-text'>U-TAD</h5>
                    </div>
                </div>
                <div className="card-block col-card-custom py-2 d-flex flex-column ps-0">
                    <div className='me-3'>
                        <Button className='bg-white border-white float-end' onMouseOver={(e) => e.target.style.color = "#828689"} onMouseOut={(e) => e.target.style.color = "#9DA3A7"}>
                            <FontAwesomeIcon icon={faTrash} color='#9DA3A7' transform="grow-5" />
                        </Button>

                        <Button className='bg-white border-white float-end' onMouseOver={(e) => e.target.style.color = "#fe2828"} onMouseOut={(e) => e.target.style.color = "#9DA3A7"}>
                            <FontAwesomeIcon icon={faHeart} color='#9DA3A7' transform="grow-5" />
                        </Button>
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