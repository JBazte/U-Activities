import React from 'react';
import Navbar from '../components/Navbar'
import ActivityDetails from '../components/ActivityDetails'
import Footer from '../components/Footer';

function Activity() {
    return (
        <>
            <Navbar />
            <div className='page-margin'>
                <div className='row mt-4 mb-5'>
                    <div className='col me-3 mb-5'>
                        <ActivityDetails />
                    </div>
                    <div className='col-4 mx-3 d-none d-lg-block'>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Activity;