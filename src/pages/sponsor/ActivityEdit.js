import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar'
import ActivityDetails from '../../components/sponsor/ActivityDetailsEdit'
import Footer from '../../components/Footer';
import ActivityInfo from '../../components/sponsor/ActivityInfoEdit';

function Activity() {

    let navigate = useNavigate();
    const [sponsorToken, setSponsorToken] = useState('');
    const [activityData, setActivityData] = useState({
        name: '',
        description: '',
        category: '',
        action_field: '',
        involved_group: '',
        location: '',
        start_date: '',
        end_date: '',
        modality: '',
        min_members: 0,
        max_members: 0
      });

    //BLOQUEO PARA GENTE SIN TOKEN SPONSOR
    useEffect(() => {
        const sponsorCookie = document.cookie.split(';').find((cookie) => cookie.trim().startsWith('sponsor-token='));
        if (!sponsorCookie) {
            navigate("/sponsor/login");
        } else {
            const token = sponsorCookie.split('=')[1];
            setSponsorToken(token);
        }
    }, [navigate]);



    const handleActivityDetailsChange = (event) => {
        const { name, value } = event.target;
        setActivityData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleActivityInfoChange = (event) => {
        const { name, value } = event.target;
        setActivityData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

    const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        console.log(JSON.stringify(activityData))
        /** 
        const response = await fetch('http://localhost:3011/api/activities', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sponsorToken}`
        },
        body: JSON.stringify(activityData)
        });

        if (response.ok) {
        // La solicitud fue exitosa
        // Realizar las acciones necesarias (redireccionar, mostrar un mensaje, etc.)
        } else {
        // La solicitud no fue exitosa
        // Manejar el error apropiadamente
        }*/
    } catch (error) {
        // Ocurrió un error durante la solicitud
        // Manejar el error apropiadamente
    }
    };


    return (
        <>
            <Navbar />
            <div className='page-margin' style={{ minWidth: "512px" }}>
                <div className='row mt-4 mb-5'>
                    <div className='col me-3 mb-5'>
                        <ActivityDetails onChange={handleActivityDetailsChange}/>
                    </div>
                    <div className='col-4 mx-3 d-none d-lg-block'>
                    
                        <ActivityInfo onChange={handleActivityInfoChange} onSubmit={handleSubmit}/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Activity;