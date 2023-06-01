import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar'
import ActivityDetails from '../components/ActivityDetails'
import Footer from '../components/Footer';
import ActivityInfo from '../components/ActivityInfo';

const serverURL = process.env.REACT_APP_BACKEND_URL;

function Activity() {
    const { id } = useParams();
    
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
        const response = await fetch(`${serverURL}/activities/${id}`);
        const jsonData = await response.json();
        setData(jsonData);
        //console.log(jsonData);
        } catch (error) {
        console.error('Error:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className='page-margin' style={{ minWidth: "512px" }}>
                <div className='row mt-4 mb-5'>
                    <div className='col me-3 mb-5'>
                    {data && (
                        <>
                        <ActivityDetails data={data} />
                        
                        </>
                    )}
                        
                        
                    </div>
                    <div className='col-4 mx-3 d-none d-lg-block'>
                    {data && <ActivityInfo data={data} />}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Activity;