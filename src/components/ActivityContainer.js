import React from 'react';
import ActivityButton from "./ActivityButton"

function ActivityContainer() {
    return (
        //Foto, nombre del evento, fecha, descripcion breve, boton cl ver detalles
        <div className='border border-dark rounded-1 w-50 row'>
            <div className="col">
                <img src='https://www.muycomputer.com/wp-content/uploads/2012/07/edificiou-tad.jpg' className='img-fluid'/>
            </div>
            <div className='py-2 col'>
                <h1 className='align-self-start'>Event name</h1>
                <p>Date</p>
                <p>Short description</p>
            </div>
            <div className='col py-2 pe-2'>
                <div className='d-flex flex-column justify-content-end border-start h-100 border-dark border-2'>
                    <ActivityButton/>
                </div>
            </div>
        </div>
    )
}

export default ActivityContainer;