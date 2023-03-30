import React from 'react';
import Navbar from '../components/Navbar'
import ActivityContainer from '../components/ActivityContainer'
import Carousel from '../components/Carousel';

function Home() {
    return (
        <>
            <Navbar />
            <div className='mx-5'>
                <div className='mt-5 row'>
                    <div className='col'>
                        <ActivityContainer />
                    </div>
                    <div className='col-3 mt-5 d-none d-lg-block'>
                        <Carousel />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;