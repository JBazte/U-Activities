import React from 'react';
import Navbar from '../components/Navbar'
import ActivityContainer from '../components/ActivityContainer'
import Carousel from '../components/Carousel';

function Home() {
    return (
        <>
            <Navbar />
            <div className='mx-5 px-5'>
                <div className='row mt-4'>
                    <div className='col mx-3'>
                        <ActivityContainer />
                    </div>
                    <div className='col-3 mt-5 mx-3 d-none d-lg-block'>
                        <Carousel />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;