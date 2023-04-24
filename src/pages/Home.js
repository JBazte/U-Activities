import React from 'react';
import Navbar from '../components/Navbar'
import ActivityContainer from '../components/ActivityContainer'
import Carousel from '../components/Carousel';

function Home() {
    return (
        <>
            <Navbar />
            <div className='page-margin'>
                <div className='row mt-4'>
                    <div className='col me-3'>
                        <ActivityContainer />
                    </div>
                    <div className='col-custom mx-3 d-none d-lg-block'>
                        <Carousel />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;