import React from 'react';
import NotificationCard from './NotificationCard'

function NotificationContainer() {
    return (
        <>
            <div className="d-flex text-start">
                <p className="title-text m-0">NOTIFICACIONES</p>
            </div>
            <hr className='border border-5 border-dark opacity-100 my-2' />
            <div className="mt-4">
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
            </div>
        </>
    )
}

export default NotificationContainer;