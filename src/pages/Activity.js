import React from 'react';
import Navbar from '../components/Navbar'
import ActivityDetails from '../components/ActivityDetails'
import Footer from '../components/Footer';
import ActivityInfo from '../components/ActivityInfo';

function Activity() {
    return (
        <>
            <Navbar />
            <div className='page-margin d-flex justify-content-center' style={{ minWidth: "512px" }}>
                <div className='row mt-4 mb-5'>
                    <div className='col me-3 mb-5'>
                        <ActivityDetails />
                    </div>
                    <div className='col-4 mx-3 d-none d-lg-block'>
                        <ActivityInfo />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Activity;