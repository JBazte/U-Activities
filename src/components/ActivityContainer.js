import React from 'react';
import ActivityButton from "./ActivityButton"

function ActivityContainer() {
    return (
        //Foto, nombre del evento, fecha, descripcion breve, boton cl ver detalles
        /*<div className='border border-dark rounded-1 w-50 row shadow'>
            <div className="col-3 p-0">
                <img src='https://www.muycomputer.com/wp-content/uploads/2012/07/edificiou-tad.jpg' className='img-fluid h-100'/>
            </div>
            <div className='py-2 col-5 d-flex align-items-start flex-column'>
                <h1>Event name</h1>
                <p className='text-muted'>Date</p>
                <p className='pb-4'>Short description</p>
                <h5 className='mt-auto'>U-TAD</h5>
            </div>
            <div className="col-1 py-2 px-0 mx-0">
                <div className="vr h-100 border border-dark opacity-100"></div>
            </div>
            <div className='col-3 py-2'>
                <div className='d-flex flex-column justify-content-end h-100'>
                    <ActivityButton/>
                </div>
            </div>
        </div>*/

        <div className="card mb-3 border border-dark rounded-1 w-50 shadow" style={{ maxWidth: "540px" }}>
            <div className="row no-gutters">
                <div className="col-3">
                    <img src='https://www.muycomputer.com/wp-content/uploads/2012/07/edificiou-tad.jpg' className='img-fluid h-100' />
                </div>
                <div className="py-2 col-5">
                    <div className="card-body">
                        <h1 className="card-title">Event name</h1>
                        <p className="card-text"><small className="text-muted">Date</small></p>
                        <p className="card-text pb-4">Short description</p>
                        <p className="card-text mt-auto">U-TAD</p>
                    </div>
                </div>
                <div className="col-1 py-2">
                    <div className="vr h-100 border border-dark opacity-100"></div>
                </div>
                <div className='col-3 py-2'>
                    <div className='d-flex flex-column justify-content-end h-100'>
                        <ActivityButton />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ActivityContainer;