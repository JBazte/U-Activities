import { React, useEffect } from 'react';
import { Form, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar'
import { useState } from 'react';

const serverURL = process.env.REACT_APP_BACKEND_URL;

function Signup() {
    let navigate = useNavigate();
    const [adminToken, setAdminToken] = useState('');

    useEffect(() => {
        const adminCookie = document.cookie.split(';').find((cookie) => cookie.trim().startsWith('admin-token='));
        if (!adminCookie) {
            navigate("/admin/login");
        } else {
            const token = adminCookie.split('=')[1];
            setAdminToken(token);
        }
        

    }, [navigate]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const [sponsorData, setSponsorData] = useState({
        entity: '',
        user: '',
        password: '',
        email: ''
    });

    const handleSponsorInputChange = (event) => {
        const { name, value } = event.target;
        setSponsorData({
            ...sponsorData,
            [name]: value
        });
    };

    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (sponsorData.password !== confirmPassword) {
            setPasswordError('Las contraseñas no son iguales');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(sponsorData.password)) {
        setPasswordError("La contraseña debe tener como mínimo 8 caracteres, 1 mayúscula y 1 número");
        return;
        }

        setPasswordError('');

        

        try {
            const response = await fetch(`${serverURL}/auth/register/sponsor`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${adminToken}`
                },
                body: JSON.stringify(sponsorData)
            });
            await response.json();
            
            navigate("/sponsor/login");
        } catch (err) {
            console.error('Registration failed:', err);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row d-flex align-items-center">
                    <div className="col-sm-6 text-black mx-auto">
                        <div className="p-5">
                            <Card className="shadow custom-form">
                                <Card.Body className="py-3 d-flex flex-column align-items-center">
                                    <h3 className="mb-4">REGISTRAR SPONSOR</h3>
                                    <Form className='w-100 px-2 vh-100 overflow-auto' style={{ "maxHeight": '410px' }} onSubmit={handleSubmit}>
                                        <Form.Group controlId="formName">
                                            <Form.Label className='fw-bold text-dark h6'>Nombre</Form.Label>
                                            <Form.Control type="text" name="user" onChange={handleSponsorInputChange} required />
                                        </Form.Group>
                                        <Form.Group controlId="formEntity">
                                            <br />
                                            <Form.Label className='fw-bold text-dark h6'>Entidad</Form.Label>
                                            <Form.Control type="text" name="entity" onChange={handleSponsorInputChange} required />
                                        </Form.Group>
                                        <Form.Group>
                                            <br />
                                            <Form.Label className='fw-bold text-dark h6'>Persona de contacto</Form.Label>
                                            <Form.Control required />
                                        </Form.Group>
                                        <Form.Group controlId="formEmail">
                                            <br />
                                            <Form.Label className='fw-bold text-dark h6'>Correo Electrónico</Form.Label>
                                            <Form.Control type="email" name="email" onChange={handleSponsorInputChange} required />
                                        </Form.Group>
                                        <Form.Group controlId="formPassword">
                                            <br />
                                            <Form.Label className='fw-bold text-dark h6'>Crea una contraseña</Form.Label>
                                            <Form.Control type="password" name="password" onChange={handleSponsorInputChange} required />
                                        </Form.Group>
                                        <Form.Group controlId="formConfirmPassword">
                                            <br />
                                            <Form.Label className='fw-bold text-dark h6'>Confirmar contraseña</Form.Label>
                                            <Form.Control type="password" name="confirm_password" onChange={handleConfirmPasswordChange} required />
                                        </Form.Group>
                                        {passwordError && <span className="text-danger">{passwordError}</span>}
                                        <Form.Group controlId="formActivityArea">
                                            <br />
                                            <Form.Label className='fw-bold text-dark h6'>Area de actividad</Form.Label>
                                            <Form.Control required />
                                        </Form.Group>
                                        <Form.Group>
                                            <br />
                                            <Form.Label className='fw-bold text-dark h6'>URL de la web corporativas</Form.Label>
                                            <Form.Control required />
                                        </Form.Group>
                                        <Form.Group controlId="formDescription">
                                            <br />
                                            <Form.Label className='fw-bold text-dark h6'>Descripción</Form.Label>
                                            <Form.Control required />
                                        </Form.Group>
                                        <br />
                                        <button type="submit" className="btn btn-primary mt-1 w-100">Registrarse</button>
                                    </Form>
                                </Card.Body >
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sticky-bottom'>
                <Footer />
            </div>
        </>
    );
};
export default Signup;