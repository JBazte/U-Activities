import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NotificationContainer from '../components/NotificationContainer'
import Carousel from '../components/Carousel';

function Notifications() {
    return (
        <>
            <Navbar />
            <div className='page-margin'>
                <div className='row mt-4'>
                    <div className='col me-3'>
                        <NotificationContainer />
                    </div>
                    <div className='col-custom mb-5 mx-3 d-none d-lg-block'>
                        <Carousel />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Notifications;