import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NotificationContainer from '../components/NotificationContainer'
import Carousel from '../components/Carousel';

function Notifications() {
    const navigate = useNavigate();

    useEffect(() => {
        const userCookie = document.cookie.split(';').find((cookie) => cookie.trim().startsWith('user-token='));
        const adminCookie = document.cookie.split(';').find((cookie) => cookie.trim().startsWith('admin-token='));
        const sponsorCookie = document.cookie.split(';').find((cookie) => cookie.trim().startsWith('sponsor-token='));

        if (!userCookie && !adminCookie && !sponsorCookie) {
            navigate('/login');
        }
    }, [navigate]);

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