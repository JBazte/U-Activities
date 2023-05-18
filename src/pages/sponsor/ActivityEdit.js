import React from 'react';
import Navbar from '../../components/Navbar'
import ActivityDetails from '../../components/sponsor/ActivityDetailsEdit'
import Footer from '../../components/Footer';
import ActivityInfo from '../../components/sponsor/ActivityInfoEdit';

function Activity() {
    return (
        <>
            <Navbar />
            <div className='page-margin' style={{ minWidth: "512px" }}>
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